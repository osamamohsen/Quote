/**
 * Created by osama on 01/05/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/Rx');
var QuoteService = (function () {
    function QuoteService(http) {
        this.http = http;
    }
    QuoteService.prototype.addQuote = function (content) {
        var body = JSON.stringify({ content: content });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/quote', body, { headers: headers });
    };
    QuoteService.prototype.getQuotes = function () {
        return this.http.get('http://localhost:8000/api/quotes')
            .map(function (response) {
            return response.json().quotes;
        });
    };
    QuoteService.prototype.updateQuote = function (id, newContent) {
        var body = JSON.stringify({ content: newContent });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8000/api/quote/' + id, body, { headers: headers })
            .map(function (response) { return response.json().quote; });
    };
    QuoteService.prototype.deleteQuote = function (id) {
        return this.http.delete('http://localhost:8000/api/quote/' + id);
    };
    QuoteService = __decorate([
        core_1.Injectable()
    ], QuoteService);
    return QuoteService;
})();
exports.QuoteService = QuoteService;
//# sourceMappingURL=quote.service.js.map