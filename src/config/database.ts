import dataSource from './dataSource'

export const connectDatabase = async (): Promise<void> => {
  try {
    await dataSource.initialize()
    console.log('Database connected')
  } catch (error) {
    throw new Error('Error connecting to DDBB' + error)
  }
}
