import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, HttpErrors, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Credenciales, Usuario} from '../models';
import {UsuarioRepository} from '../repositories';
import {AutenticacionService} from '../services';
const fetch = require("node-fetch");
export class UsuarioController{
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepository: UsuarioRepository,
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService

  ) { }

  @post('/registrese')
  @response(200, {
    description: 'Usuario model instance',
    content: {'application/json': {schema: getModelSchemaRef(Usuario)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {
            title: 'NewUsuario',
            exclude: ['id'],
          }),
        },
      },
    })
    usuario: Omit<Usuario, 'id'>,
  ):  Promise<Usuario> {
    const password = this.servicioAutenticacion.GenerarClave();
    const claveCifrada= this.servicioAutenticacion.Encriptar(password);
    usuario.password=claveCifrada;
    const user= await this.usuarioRepository.create(usuario);

    if(usuario.perfil == "usuario"){
      const p = await this.usuarioRepository.create(usuario);
    }

    return user;
  }

  @get('/usuarios/count')
  @response(200, {
    description: 'Usuario model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.count(where);
  }

  @get('/usuarios')
  @response(200, {
    description: 'Array of Usuario model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Usuario, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Usuario) filter?: Filter<Usuario>,
  ): Promise<Usuario[]> {
    return this.usuarioRepository.find(filter);
  }

  @patch('/usuarios')
  @response(200, {
    description: 'Usuario PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
    @param.where(Usuario) where?: Where<Usuario>,
  ): Promise<Count> {
    return this.usuarioRepository.updateAll(usuario, where);
  }

  @get('/usuarios/{id}')
  @response(200, {
    description: 'Usuario model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Usuario, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Usuario, {exclude: 'where'}) filter?: FilterExcludingWhere<Usuario>
  ): Promise<Usuario> {
    return this.usuarioRepository.findById(id, filter);
  }

  @patch('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Usuario, {partial: true}),
        },
      },
    })
    usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.updateById(id, usuario);
  }

  @put('/usuarios/{id}')
  @response(204, {
    description: 'Usuario PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() usuario: Usuario,
  ): Promise<void> {
    await this.usuarioRepository.replaceById(id, usuario);
  }

  @del('/usuarios/{id}')
  @response(204, {
    description: 'Usuario DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.usuarioRepository.deleteById(id);
  }

  /**
   * proceso propio de login
   *
   */



  @post('/Identificar-usuario', {
    responses: {
      "200": {
        description: "Identificacion de usuiario"
      }
    }

  })
  async identificar(
    @requestBody() credenciales: Credenciales
  ): Promise<Usuario | null> {
    const usuario = await this.usuarioRepository.findOne({
      where: {
        correo: credenciales.usuario,
        password: credenciales.password
      }
    });
    return usuario

  }
@post('/LoginT')
@response (200,{
  description: "Identificacion del usuario generando token"

})

async identificarToken(
  @requestBody() credenciales: Credenciales
){
  const user= await this.servicioAutenticacion.IdentificarUsuario(credenciales);
  if (user) {
    const token = this.servicioAutenticacion.GeneracionToken(user);
    return {
      info:{
        nombre: user.nombre,
        correo: user.correo,
        id: user.id,
        perfil: user.perfil,
        roles: user.roles

     },
     tk: token
    }
  }else{
    throw new HttpErrors[401]("Datos invalidos");
  }
}
}
