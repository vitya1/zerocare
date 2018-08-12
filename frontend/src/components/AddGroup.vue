<template>
  <div>

    <div class="ui form">
      <div class="grouped fields">
        <label>Правила добавления новых участников:</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="example2" checked="checked">
            <label>Открытое</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="example2">
            <label>По приглашению</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="example2">
            <label>Голосование (по решению большинства)</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="example2">
            <label>Автоматически (ссылка на адаптер...)</label>
          </div>
        </div>

        <div class="field">
          <label>Требование к участникам:</label>
          <textarea rows="2"></textarea>
        </div>
      </div>

      <div class="ui red message">
        <p>Сделать тарифы вместо этого (а они могут зависеть от текущего состояния имущества), либо одна группа - один тариф</p>
      </div>

      <div class="grouped fields">
        <div class="field">
          <label>Размер взносов</label>
          <input type="text" placeholder="100$">
        </div>
        <div class="field">
          <label>Сумма, после которой начинает действовать страховка (deductible)</label>
          <input type="text" placeholder="1000$">
        </div>
        <div class="field">
          <label>Покрытие (co-insurance)</label>
          <input type="text" placeholder="80%">
        </div>
      </div>

      <div class="field">
        <label>Гарантийные случаи (нужно ли описывать негарантийные?)</label>
        <textarea rows="3"></textarea>
        <div class="ui blue message">
          <p>Наступление гарантийного случая определяется голосованием! (пока что, потом можно добавить определение сторонним сервисом по апи, или контрактом через ораклайзеры)</p>
        </div>
      </div>

      <div class="grouped fields">
        <label>Изменение правил группы: (будет реализованно позже)</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="example2">
            <label>Не допускается</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="example2">
            <label>При поддержке большинства</label>
          </div>
        </div>
      </div>

      <div class="field">
        <div class="ui toggle checkbox">
          <input type="checkbox" name="public">
          <label>Включить ограничения законодательства рф?</label>
        </div>
      </div>

      <div class="field">
        <button class="ui blue button">Отправить</button>
      </div>

    </div>

  </div>
</template>

<script>
export default {
    name: 'add-group',
    data: function() {
        return {
        }
    }
}
</script>
