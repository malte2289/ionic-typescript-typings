/**
 * Created by malte on 03.10.14.
 */
 ///<reference path="../angularjs/angular.d.ts"/>
declare module ionic
{
    interface IonicPopoverService {
        fromTemplate(template:string, options: Object):ng.IPromise<IonicPopoverController>;
        fromTemplateUrl(url: string, options: Object):ng.IPromise<IonicPopoverController>;
    }

    interface IonicPopoverControllerInitializeOptions {
        scope: Object;
        focusFirstInput: boolean;
        backdropClickToClose: boolean;
        hardwareBackButtonClose: boolean;
    }

    interface IonicPopoverController
    {
        initialize(options: IonicPopoverControllerInitializeOptions);
        show($event:Object): ng.IPromise<any>;
        hide(): ng.IPromise<any>;
        remove(): ng.IPromise<any>;
        isShown(): boolean;
    }
}