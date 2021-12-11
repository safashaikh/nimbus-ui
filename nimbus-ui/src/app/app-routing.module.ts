import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { UserComponent } from './components/user/user.component';
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:userID', component: UserComponent},
  { path: 'orders/:orderID', component: OrderComponent},
  { path: 'products/:pid/review', component: ReviewComponent},
  { path: 'products/:pid', component: ReviewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
