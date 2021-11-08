import {Controller} from "stimulus";
import {debounce} from "lodash-es";

export function useEventListeners(controller: Controller, element: Document | Window | HTMLElement, eventNames: string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  // keep a copy of the lifecycle functions of the controller
  const controllerDisconnect = controller.disconnect.bind(controller);
  let options = opts;

  if (options?.debounce) {
    handler = debounce(handler.bind(controller), options.debounce);
    delete options.debounce;
  } else {
    handler = handler.bind(controller);
  }

  let setup = () => eventNames.forEach(eventName => element.addEventListener(eventName, handler, options));
  let teardown = () => eventNames.forEach(eventName => element.removeEventListener(eventName, handler));

  setup();

  Object.assign(controller, {
    disconnect() {
      teardown();
      controllerDisconnect();
    },
  });

  return {setup, teardown};
}

export function useEventListener(controller: Controller, element: Document | Window | HTMLElement, eventName: string, handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  return useEventListeners(controller, element, [eventName], handler, opts);
}

export function useCollectionEventListeners(controller: Controller, elements: Array<Document | Window | HTMLElement>, eventNames: string[], handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  let handlers: Array<{ setup: () => void, teardown: () => void, }> = [];
  elements.forEach(el => {
    let {setup, teardown} = useEventListeners(controller, el, eventNames, handler, opts);
    handlers.push({setup, teardown});
  });
  return [
    () => handlers.forEach(h => h.setup()),
    () => handlers.forEach(h => h.teardown()),
  ];
}

export function useCollectionEventListener(controller: Controller, elements: Array<Document | Window | HTMLElement>, eventName: string, handler: (...args: any[]) => void, opts?: AddEventListenerOptions & { debounce?: number }) {
  return useCollectionEventListeners(controller, elements, [eventName], handler, opts);
}
