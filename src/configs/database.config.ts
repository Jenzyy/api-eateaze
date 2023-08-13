import { connect, ConnectOptions } from 'mongoose'
// Configuración para evitar la DeprecationWarning
import mongoose from 'mongoose'
mongoose.set('strictQuery', false)
export const dbConnect = () => {
  connect(
    process.env.MONGO_DB_CNN_STRING as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  ).then(
    () => console.log('connect successfully'),
    (error) => console.log(error)
  )
}
