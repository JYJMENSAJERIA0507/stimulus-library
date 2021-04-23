import { BaseController } from "../utilities/base_controller";
export declare class TurboFrameRefreshController extends BaseController {
    static values: {
        interval: NumberConstructor;
        poll: BooleanConstructor;
    };
    readonly intervalValue: number;
    readonly pollValue: boolean;
    readonly hasPollValue: boolean;
    _timeoutHandle: null | ReturnType<typeof window.setTimeout>;
    get _poll(): boolean;
    initialize(): void;
    connect(): void;
    disconnect(): void;
    refresh(event?: Event): void;
}
//# sourceMappingURL=turbo_frame_refresh_controller.d.ts.map