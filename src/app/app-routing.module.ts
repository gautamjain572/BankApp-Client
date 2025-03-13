import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBankComponent } from './components/add-bank/add-bank.component';
import { GetBanksComponent } from './components/get-banks/get-banks.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { GetAccountsComponent } from './components/get-accounts/get-accounts.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { WithdrawComponent } from './components/withdraw/withdraw.component';

const routes: Routes = [
  { path: 'add-bank', component: AddBankComponent },
  { path: 'get-banks', component: GetBanksComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'get-accounts', component: GetAccountsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'withdraw', component: WithdrawComponent },
  { path: '', redirectTo: 'add-bank', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
