import emitter from "tiny-emitter/instance";

export default {
    $on: (...args) => emitter.on(...args),
    $once: (...args) => emitter.once(...args),
    $off: (...args) => emitter.off(...args),
    $emit: (...args) => emitter.emit(...args),
};

// 7. 创建好之后，在全局main中引入事件总线
