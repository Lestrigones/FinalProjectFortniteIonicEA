'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">fortnite-Ionic documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-531a0b9f6cb0ded46f3ae95de159d00c"' : 'data-target="#xs-components-links-module-AppModule-531a0b9f6cb0ded46f3ae95de159d00c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-531a0b9f6cb0ded46f3ae95de159d00c"' :
                                            'id="xs-components-links-module-AppModule-531a0b9f6cb0ded46f3ae95de159d00c"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ComponentsModule.html" data-type="entity-link">ComponentsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ComponentsModule-137a0a39f6947c2407bc79c8a8c1f851"' : 'data-target="#xs-components-links-module-ComponentsModule-137a0a39f6947c2407bc79c8a8c1f851"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ComponentsModule-137a0a39f6947c2407bc79c8a8c1f851"' :
                                            'id="xs-components-links-module-ComponentsModule-137a0a39f6947c2407bc79c8a8c1f851"' }>
                                            <li class="link">
                                                <a href="components/AvatarSelectorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AvatarSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MapaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MapaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PostsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PostsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link">LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-17614ee31ab3d24002696810de73b980"' : 'data-target="#xs-components-links-module-LoginPageModule-17614ee31ab3d24002696810de73b980"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-17614ee31ab3d24002696810de73b980"' :
                                            'id="xs-components-links-module-LoginPageModule-17614ee31ab3d24002696810de73b980"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MasinfoPageModule.html" data-type="entity-link">MasinfoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MasinfoPageModule-eb41e5e71bda144780c93568c0d0a580"' : 'data-target="#xs-components-links-module-MasinfoPageModule-eb41e5e71bda144780c93568c0d0a580"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MasinfoPageModule-eb41e5e71bda144780c93568c0d0a580"' :
                                            'id="xs-components-links-module-MasinfoPageModule-eb41e5e71bda144780c93568c0d0a580"' }>
                                            <li class="link">
                                                <a href="components/MasinfoPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MasinfoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PipesModule.html" data-type="entity-link">PipesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-PipesModule-de9793cf0dcd9e0d46efa680841232af"' : 'data-target="#xs-pipes-links-module-PipesModule-de9793cf0dcd9e0d46efa680841232af"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-PipesModule-de9793cf0dcd9e0d46efa680841232af"' :
                                            'id="xs-pipes-links-module-PipesModule-de9793cf0dcd9e0d46efa680841232af"' }>
                                            <li class="link">
                                                <a href="pipes/DomSanitizerPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DomSanitizerPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FiltroPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FiltroPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ImageSanitizerPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImageSanitizerPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/ImagenPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ImagenPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link">PostModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link">Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab1PageModule-a9f4e68eca8ffdccffbae657151da2d4"' : 'data-target="#xs-components-links-module-Tab1PageModule-a9f4e68eca8ffdccffbae657151da2d4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-a9f4e68eca8ffdccffbae657151da2d4"' :
                                            'id="xs-components-links-module-Tab1PageModule-a9f4e68eca8ffdccffbae657151da2d4"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link">Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab2PageModule-bd2e0da764f17fe1b2fd11f43b101d5b"' : 'data-target="#xs-components-links-module-Tab2PageModule-bd2e0da764f17fe1b2fd11f43b101d5b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-bd2e0da764f17fe1b2fd11f43b101d5b"' :
                                            'id="xs-components-links-module-Tab2PageModule-bd2e0da764f17fe1b2fd11f43b101d5b"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link">Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab3PageModule-0313be2d8757a74d8a7013635131a81d"' : 'data-target="#xs-components-links-module-Tab3PageModule-0313be2d8757a74d8a7013635131a81d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-0313be2d8757a74d8a7013635131a81d"' :
                                            'id="xs-components-links-module-Tab3PageModule-0313be2d8757a74d8a7013635131a81d"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab4PageModule.html" data-type="entity-link">Tab4PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab4PageModule-12f7a78ee3644c085568cb6a58e0b488"' : 'data-target="#xs-components-links-module-Tab4PageModule-12f7a78ee3644c085568cb6a58e0b488"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab4PageModule-12f7a78ee3644c085568cb6a58e0b488"' :
                                            'id="xs-components-links-module-Tab4PageModule-12f7a78ee3644c085568cb6a58e0b488"' }>
                                            <li class="link">
                                                <a href="components/Tab4Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab4Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab5PageModule.html" data-type="entity-link">Tab5PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab5PageModule-381bb7ac9aefda0eb0f43a0e79e1a655"' : 'data-target="#xs-components-links-module-Tab5PageModule-381bb7ac9aefda0eb0f43a0e79e1a655"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab5PageModule-381bb7ac9aefda0eb0f43a0e79e1a655"' :
                                            'id="xs-components-links-module-Tab5PageModule-381bb7ac9aefda0eb0f43a0e79e1a655"' }>
                                            <li class="link">
                                                <a href="components/Tab5Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab5Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab6PageModule.html" data-type="entity-link">Tab6PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Tab6PageModule-fd1d00b568d8eea00106e351e70b8cf8"' : 'data-target="#xs-components-links-module-Tab6PageModule-fd1d00b568d8eea00106e351e70b8cf8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab6PageModule-fd1d00b568d8eea00106e351e70b8cf8"' :
                                            'id="xs-components-links-module-Tab6PageModule-fd1d00b568d8eea00106e351e70b8cf8"' }>
                                            <li class="link">
                                                <a href="components/Tab6Page.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Tab6Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link">TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' : 'data-target="#xs-components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' :
                                            'id="xs-components-links-module-TabsPageModule-e91723c989787888396980cfb9cffea6"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link">TabsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Environment.html" data-type="entity-link">Environment</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/DataLocalService.html" data-type="entity-link">DataLocalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FortniteApiService.html" data-type="entity-link">FortniteApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ItemsService.html" data-type="entity-link">ItemsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link">PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UiServiceService.html" data-type="entity-link">UiServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsuarioService.html" data-type="entity-link">UsuarioService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/InterceptorService.html" data-type="entity-link">InterceptorService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/UsuarioGuard.html" data-type="entity-link">UsuarioGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Challenge.html" data-type="entity-link">Challenge</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum.html" data-type="entity-link">Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link">Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link">Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link">Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RespuestaPosts.html" data-type="entity-link">RespuestaPosts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RootObject.html" data-type="entity-link">RootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Usuario.html" data-type="entity-link">Usuario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Week.html" data-type="entity-link">Week</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});