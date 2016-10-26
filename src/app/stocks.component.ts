import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component({
    selector: 'stocks',
    template: `
    <h2>Stocks</h2>

    {{title}}

    <ul [ngStyle]="{'color':'myColor'}">
        <li *ngFor="let stock of stocks">
            {{stock}}
        </li>
    </ul>

    <hr>

    <ul *ngIf="stockMarkets.length == 3" [ngClass]="'customClass'">
        <li *ngFor="let stockMarket of stockMarkets">
            {{stockMarket}}
        </li>
    </ul>

    <hr>

    <div [ngSwitch]="market" [ngClass]="'centerClass'">
        <div *ngSwitchCase="'A'"> New York Stock Exchange</div>
        <div *ngSwitchCase="'B'"> London Stock Exchange</div>
        <div *ngSwitchCase="'C'"> London Stock Exchange</div>
        <div *ngSwitchDefault> Could not find a match</div>
    </div>
    
    `,styles:[`
    .customClass{
        color:violet;
    }
    .centerClass{
        text-align:center;
    }
    `]
})


export class StocksComponent{
    title="List of Stocks:";
    market='A';
    stockMarkets=['A','B','C'];
    stocks;
    myColor='blue';
    
    constructor(stockService:StockService){
        this.stocks=stockService.getStocks();
    }
}