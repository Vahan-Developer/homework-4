const sendAllUses = (req, res) => {
    // Установим заголовок ответа в формате JSON
  res.setHeader('Content-Type', 'application/json');
  // Отправим данные в виде JSON-объекта, 
  // которые подготовим в миддлваре findAllUses
  res.end(JSON.stringify(req.UsesArray));
};

// Экспортируем контроллер
module.exports = sendAllUses;
