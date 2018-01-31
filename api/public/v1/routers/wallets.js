const controllers = require('../controllers/wallets')
const schema = require('../schemas/wallets')

module.exports = (registrar) => {
  registrar.get('accounts/getAllAccounts', controllers.index)
  registrar.get('accounts', controllers.show, {schema: schema.getWallet})
  registrar.get('accounts/getBalance', controllers.balance, {schema: schema.getBalance})
  registrar.get('accounts/getPublicKey', controllers.publicKey, {schema: schema.getPublicKey})
  registrar.get('accounts/delegates/fee', controllers.fee)
  registrar.get('accounts/delegates', controllers.delegates, {schema: schema.getDelegates})
  registrar.get('accounts/top', controllers.top)
  registrar.get('accounts/count', controllers.count)
}