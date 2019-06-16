import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
var URL = environment.url;
var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
        this.paginaPosts = 0;
    }
    PostsService.prototype.getPosts = function () {
        this.paginaPosts++;
        return this.http.get(URL + "/posts/?pagina=" + this.paginaPosts);
    };
    PostsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PostsService);
    return PostsService;
}());
export { PostsService };
//# sourceMappingURL=posts.service.js.map