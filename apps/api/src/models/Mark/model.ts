import { sequelize } from '@db'
import { DataTypes } from 'sequelize'
import { TaskModel, MarkValueModel, DiaryUserModel } from '@models'
import { IModelPrototypeNoId } from '../types'

export type MarkModelType = {
  diaryUserId: number
  taskId: number
  markValueId: number
}

export type IMarkModelType = IModelPrototypeNoId<MarkModelType>

export const MarkModel = sequelize.define<IMarkModelType>(
  'mark',
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
    markValueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: MarkValueModel,
        key: 'id'
      }
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false
  }
)
