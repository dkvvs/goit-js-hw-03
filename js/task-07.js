console.log('Задание 7');

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const id = `id_${this.transactions.length + 1}`;
    return { id, type, amount };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
    console.log(this.transactions);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Снятие ${amount} невозможно. Недостаточно средств`);
    } else {
      this.balance -= amount;
      console.log(this.balance);
      this.transactions.push(
        this.createTransaction(amount, Transaction.WITHDRAW),
      );
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }
    return `Транзакция не найдена`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let totalTransaction = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalTransaction += transaction.amount;
      }
    }
    if (type === 'deposit') {
      return `Зачислено всего ${totalTransaction} `;
    } else if (type === 'withdraw') {
      return `Снято всего ${totalTransaction} `;
    } else {
      return `Нет данных`;
    }
  },
};

account.deposit(10);
account.deposit(7);
account.deposit(30);
account.withdraw(30);
account.withdraw(15);
console.log('Текущий баланс :', account.getBalance());
console.log(account.getTransactionDetails('id_1'));
console.log(account.getTransactionDetails('id_150'));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal('kredit'));
