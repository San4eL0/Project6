/**
 * Настройка тестовой среды.
 * Выполняется один раз перед всеми тестами.
 */
const { sequelize } = require('../models');

beforeAll(async () => {
  // Синхронизируем схему в тестовой БД
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  // Закрываем соединение, чтобы Jest завершился
  await sequelize.close();
});

// Увеличиваем таймаут для медленных операций
jest.setTimeout(30000);