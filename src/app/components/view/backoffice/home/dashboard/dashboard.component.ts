import { Component, OnInit } from '@angular/core';

export interface Card {
  text: string;
  icon: string;
  amount: number;
  lastMonth: string;
  backgroundColor: string;
  colsNum: number;
  rows: number;
}

export interface TheLastOrder {
  numped: number;
  client: string;
  date: string;
  status: string;
}

export interface TopProduct {
  description: string;
  qtdySale: number;
  totalProfit: number;
}

const TOP_PRODUCTS: TopProduct[] = [
  { description: "Produto 01", qtdySale: 859, totalProfit: 1000.56 },
  { description: "Produto 02", qtdySale: 452, totalProfit: 1200.56 },
  { description: "Produto 03", qtdySale: 965, totalProfit: 1900.56 },
  { description: "Produto 04", qtdySale: 784, totalProfit: 1050.56 },
  { description: "Produto 05", qtdySale: 266, totalProfit: 1059.56 },
  { description: "Produto 06", qtdySale: 854, totalProfit: 900.56 },
  { description: "Produto 07", qtdySale: 453, totalProfit: 10.56 },
  { description: "Produto 08", qtdySale: 754, totalProfit: 190.56 },
  { description: "Produto 09", qtdySale: 110, totalProfit: 1590.56 },
  { description: "Produto 10", qtdySale: 59, totalProfit: 1555.56 },
];

const THE_LAST_ORDERS: TheLastOrder[] = [
  { numped: 1, client: "Axel Figueredo", date: "26/02/2020", status: "Aberto" },
  { numped: 2, client: "Geissy Hanie", date: "26/02/2020", status: "Aberto" },
  { numped: 3, client: "Jaum Galinho", date: "26/02/2020", status: "Finalizado" },
  { numped: 4, client: "Major", date: "26/02/2020", status: "Entregue" },
  { numped: 5, client: "Deizano", date: "26/02/2020", status: "Pendente" },
  { numped: 6, client: "João Lucas", date: "26/02/2020", status: "Aberto" },
  { numped: 7, client: "Henrique Dantas", date: "26/02/2020", status: "Finalizado" },
  { numped: 8, client: "Milena Toscana", date: "26/02/2020", status: "Aberto" },
  { numped: 9, client: "Neymar Jr", date: "26/02/2020", status: "Pendente" },
  { numped: 10, client: "Ronadinho", date: "26/02/2020", status: "Aberto" },
  { numped: 11, client: "Kaká", date: "26/02/2020", status: "Aberto" },
  { numped: 12, client: "Dida", date: "26/02/2020", status: "Pendente" },
  { numped: 13, client: "Eduardo Luiz", date: "26/02/2020", status: "Finalizado" },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /* Breakpoints para controlar as colunas respondendo ao tamanho da tela */
  breakpoint: number;
  breakpointCharts: number;
  breakpointTables: number;
  colspanTable1: number;
  colspanTable2: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint =
      (window.innerWidth <= 1023 && window.innerWidth >= 632) ? 2
        : (window.innerWidth <= 632) ? 1 : 4;
    this.breakpointCharts = this.breakpoint === 4 ? 2 : 1;
    this.breakpointTables = this.breakpointCharts === 2 ? 12 : 1;
    this.colspanTable1 = this.breakpointTables === 12 ? 5 : 1;
    this.colspanTable2 = this.breakpointTables === 12 ? 7 : 1;
  }

  onResize(event) {
    this.breakpoint =
      (event.target.innerWidth <= 1023 && event.target.innerWidth >= 632) ? 2
        : (event.target.innerWidth <= 632) ? 1 : 4;
    this.breakpointCharts = this.breakpoint === 4 ? 2 : 1;
    this.breakpointTables = this.breakpointCharts === 2 ? 12 : 1;
    this.colspanTable1 = this.breakpointTables === 12 ? 5 : 1;
    this.colspanTable2 = this.breakpointTables === 12 ? 7 : 1;
  }
  /* Graficos */
  card: Card[] = [
    { text: 'Recebidos', icon: "add_shopping_cart", amount: 358, lastMonth: '20%', rows: 2, colsNum: 1, backgroundColor: "linear-gradient(135deg,#23bdb8,#43e794)" },
    { text: 'Entregues', icon: "event_available", amount: 852, lastMonth: '38%', rows: 2, colsNum: 1, backgroundColor: 'linear-gradient(135deg,#9a56ff,#e36cd9)' },
    { text: 'Novos', icon: "fiber_new", amount: 398, lastMonth: '12%', rows: 2, colsNum: 1, backgroundColor: 'linear-gradient(135deg,#f48665,#fda23f)' },
    { text: 'Total', icon: "attach_money", amount: 258, lastMonth: '21%', rows: 2, colsNum: 1, backgroundColor: 'linear-gradient(135deg,#289cf5,#84c0ec)' },
  ];

  chatsLineText = "Desempenho de Vendas";
  chatsDoughnutText = "Desempenho de Produtos";

  /* Tabelas */
  table1Text = "Top Produtos";
  table2Text = "Últimos Pedidos";
  table1Icon = "insights";
  table2Icon = "flag";
  displayedColumnsProducts: string[] = ['description', 'qtdySale', 'totalProfit'];
  displayedColumnsOrders: string[] = ['numped', 'client', 'date', 'status'];
  dataSourceProducts = TOP_PRODUCTS;
  dataSourceOrders = THE_LAST_ORDERS;

}
