import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimGuard } from './guards/anim.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/blog/blog.module').then((m) => m.BlogModule),
      data:{animation:'AboutPage'}
  },
  {
    path: 'portfolio',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
      data:{animation:'portfolio'}
  },
  {
    path: 'projects',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/projects/projects.module').then((m) => m.ProjectsModule),
      data:{animation:'projects'}
  },
  {
    path: 'products',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
      data:{animation:'products'}
  },
  {
    path: 'login',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/authentication/login/login.module').then(
        (m) => m.LoginModule
      ),
      data:{animation:'login'}
  },
  {
    path: 'signup',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/authentication/signup/signup.module').then(
        (m) => m.SignupModule
      ),
      data:{animation:'signup'}
  },
  {
    path: 'forgotPassword',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import(
        './pages/authentication/forgot-password/forgot-password.module'
      ).then((m) => m.ForgotPasswordModule),
      data:{animation:'forgotPassword'}
  },
  {
    path: 'verification',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/authentication/verification/verification.module').then(
        (m) => m.VerificationModule
      ),
      data:{animation:'verification'}
  },
  {
    path: 'contact',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
      data:{animation:'contact'}
  },
  {
    path: 'privacy-policy',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
      data:{animation:'privacy-policy'}
  },
  {
    path: 'terms-conditions',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/terms-conditions/terms-conditions.module').then(
        (m) => m.TermsConditionsModule
      ),
      data:{animation:'terms-conditions'}
  },
  {
    path: 'disclaimer',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/disclaimer/disclaimer.module').then(
        (m) => m.DisclaimerModule
      ),
      data:{animation:'disclaimer'}
  },
  {
    path: 'returns-refunds',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/returns-refunds/returns-refunds.module').then(
        (m) => m.ReturnsRefundsModule
      ),
      data:{animation:'returns-refunds'}
  },
  {
    path: 'home',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
      data:{animation:'HomePage'}
  },
  {
    path: 'search',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/search/search.module').then((m) => m.SearchModule),
      data:{animation:'search'}
  },
  {
    path: 'about',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
      data:{animation:'about'}
  },
  {
    path: 'faqs',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/faqs/faqs.module').then((m) => m.FaqsModule),
      data:{animation:'faqs'}
  },
  {
    path: 'reviews',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/reviews/reviews.module').then((m) => m.ReviewsModule),
      data:{animation:'reviews'}
  },
  {
    path: '**',
    canActivate:[AnimGuard],
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
      data:{animation:'404'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
