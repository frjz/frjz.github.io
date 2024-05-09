import React, { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь ты можешь обработать отправку комментария, например, отправить на сервер или сохранить в состоянии вышестоящего компонента
    console.log('Отправлен комментарий:', comment);
    setComment(''); // Очистить поле после отправки
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={handleChange}
        placeholder="Напишите комментарий..."
        rows={4}
        cols={50}
      ></textarea>
      <br />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default CommentForm;