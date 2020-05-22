import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RequestService } from './request.service';
import { FilterComponent } from './filter/filter.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [AppComponent, FilterComponent, ContentComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [RequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
