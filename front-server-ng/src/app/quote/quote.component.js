var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var QuoteComponent = (function () {
    function QuoteComponent(quoteService) {
        this.quoteService = quoteService;
        this.editing = false;
        this.editValue = '';
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent.prototype.onEdit = function () {
        this.editing = true;
        this.editValue = this.quote.content;
    };
    QuoteComponent.prototype.onUpdate = function () {
        var _this = this;
        this.quoteService.updateQuote(this.quote.id, this.editValue)
            .subscribe(function (quote) {
            _this.quote = quote;
            _this.editValue = '';
        });
        this.editing = false;
    };
    QuoteComponent.prototype.onCancel = function () {
        this.editing = false;
        this.editValue = '';
    };
    QuoteComponent.prototype.onDelete = function () {
        console.log(this.quote.id);
        this.quoteService.deleteQuote(this.quote.id)
            .subscribe(function () { return console.log('Quote deleted'); });
    };
    __decorate([
        core_1.Input()
    ], QuoteComponent.prototype, "quote");
    QuoteComponent = __decorate([
        core_1.Component({
            selector: 'app-quote',
            templateUrl: './quote.component.html',
            styleUrls: ['./quote.component.css']
        })
    ], QuoteComponent);
    return QuoteComponent;
})();
exports.QuoteComponent = QuoteComponent;
//# sourceMappingURL=quote.component.js.map