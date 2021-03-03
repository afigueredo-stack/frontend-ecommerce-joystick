import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';

/* Routing */
import { AppRoutingModule } from './components/router/app-routing.module';

/* Angular Material */
import { AngularMaterialModule } from './components/design/material-design/angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* ChartJS */
import { ChartsModule } from 'ng2-charts';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListResponsiveModule } from './components/design/mat-grid-list-responsive/mat-grid-list-responsive.module';

/* Components */
import { AppComponent } from './components/view/index/app.component';
import { LogInComponent } from './components/view/backoffice/log-in/log-in.component';
import { RegisterComponent } from './components/view/backoffice/register/register.component';
import { HomeComponent } from './components/view/backoffice/home/home.component';
import { HeaderComponent } from './components/view/backoffice/models/header/header.component';
import { DashboardComponent } from './components/view/backoffice/home/dashboard/dashboard.component';
import { FooterComponent } from './components/view/backoffice/models/footer/footer.component';
import { PainelLeftComponent } from './components/view/backoffice/models/painel-left/painel-left.component';

/* ChartJS Components */
import { BarChartComponent } from "./components/design/charts/bar-chart/BarChartComponent";
import { BubbleChartComponent } from './components/design/charts/bubble-chart/bubble-chart.component';
import { LineChartComponent } from './components/design/charts/line-chart/line-chart.component';
import { PieChartComponent } from './components/design/charts/pie-chart/pie-chart.component';
import { RadarChartComponent } from './components/design/charts/radar-chart/radar-chart.component';
import { DoughnutChartComponent } from './components/design/charts/doughnut-chart/doughnut-chart.component';

/* Scrollbar Components */
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

/* Loading Components  */
import { LoadingComponent } from './components/design/loading/loading.component';
import { OverlayService } from './components/services/overlay.service';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    RegisterComponent,
    HeaderComponent,
    DashboardComponent,
    FooterComponent,
    PainelLeftComponent,
    BarChartComponent,
    BubbleChartComponent,
    LineChartComponent,
    PieChartComponent,
    RadarChartComponent,
    DoughnutChartComponent,
    LoadingComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    /* NgxLoadingModule.forRoot({}), */
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    MatGridListResponsiveModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    [OverlayService]
  ],
  entryComponents: [LoadingComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }