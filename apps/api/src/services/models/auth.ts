import { sequelize } from '@db'
import { DataTypes, Model, Optional } from 'sequelize'
import { DiaryUserModel } from './diaryUser'
import { IModelPrototype } from './types'

export type AuthModelType = {
  id: number
  idDiaryUser: number
  token: string
  lastUsedDate: string
}

export type IAuthModel = IModelPrototype<AuthModelType, 'id'>

export const AuthModel = sequelize.define<IAuthModel>(
  'auth',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    idDiaryUser: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: DiaryUserModel,
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(24),
      allowNull: false,
      unique: true
    },
    lastUsedDate: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
)
