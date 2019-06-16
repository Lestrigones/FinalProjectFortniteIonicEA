import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
var Tab1Page = /** @class */ (function () {
    // posts: Post [] = [];
    function Tab1Page(postsService) {
        this.postsService = postsService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.postsService.getPosts()
            .subscribe(function (resp) {
            console.log(resp);
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [PostsService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map