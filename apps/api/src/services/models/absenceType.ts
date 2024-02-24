import { cache, enableCache, sequelize } from '@db'
import { DataTypes } from 'sequelize'
import { IModelPrototype } from './types'
import { AbsenceTypes, AbsenceTypesKeys } from '@diary-spo/shared'

export type AbsenceTypeModelType = {
  id: number
  name: AbsenceTypesKeys
}

export type IAbsenceTypeModel = IModelPrototype<AbsenceTypeModelType, 'id'>

const absenceTypeModel = sequelize.define<IAbsenceTypeModel>(
  'absenceType',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.ENUM(...Object.keys(AbsenceTypes)),
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

export const AbsenceTypeModel =  enableCache ? cache.init<IAbsenceTypeModel>(absenceTypeModel) : absenceTypeModel