import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { HomeService } from './home.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarComponent } from './star/star.component';
import { SummationPipe } from './summation.pipe';
import { HighlightDirective } from './highlight.directive';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { RxwebFormComponent } from './rxweb-form/rxweb-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './service/post.service';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthorsComponent,
    StarComponent,
    SummationPipe,
    HighlightDirective,
    SignupFormComponent,
    RxwebFormComponent,
    PostsComponent,
    NavComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path : 'home',
        component: HomeComponent
      },
      {
        path : 'posts',
        component: PostsComponent
      },
      {
        path : 'forms',
        component : RxwebFormComponent
      },
      {
        path : 'ngrx',
        component : NgrxComponent
      }
    ]),
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [
    PostService,
    HomeService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
