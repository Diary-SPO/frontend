import { sequelize } from '@db'
import { DataTypes } from 'sequelize'
import { DiaryUserModel } from '../DiaryUser'
import { TaskModel } from '../Task'
import { IModelPrototypeNoId } from '../types'

export type RequiredModelType = {
  diaryUserId: number
  taskId: number
  isRequired: boolean
}

export type IRequiredModel = IModelPrototypeNoId<RequiredModelType>

export const RequiredModel = sequelize.define<IRequiredModel>(
  'required',
  {
    diaryUserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: DiaryUserModel,
        key: 'id'
      }
    },
    taskId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: TaskModel,
        key: 'id'
      }
    },
    isRequired: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }
)
