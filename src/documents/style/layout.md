# 布局 Layout

YunUI 提供了一套简单的基于flex布局的栅格系统。 你可以通过引用预定好的类来达到想要的布局。

### 计算规则

> 等分网格： 每一个 `.yun-flex-container` 控制一个 `行`，`.yun-flex-item` 就是每一个行中的 `列`，这些列等宽。

> 栅格： 每一个 `yun-grid-container` 控制一个 `行`，`yun-grid-col-*` 控制每一行中的 `列宽` 。 `*` 值为 1-5。

``` css
//示例 1行3列，1：2：1 的列比例

<div class="yun-grid-container">
    <div class="yun-grid-col-1">
        <div class="yun-gird-content">1</div>
    </div>
    <div class="yun-grid-col-2">
        <div class="yun-gird-content">2</div>
    </div>
    <div class="yun-grid-col-1">
        <div class="yun-gird-content">1</div>
    </div>
</div>

```

### 代码示例

等分网格 AVG Grid
``` css
<div class="yun-flex-container">
    <div class="yun-flex-item">
        <div class="yun-flex-content">1/2</div>
    </div>
    <div class="yun-flex-item">
        <div class="yun-flex-content">1/2</div>
    </div>
</div>
```

栅格 Grid
``` css
<div class="yun-grid-container">
    <div class="yun-grid-col-1">
        <div class="yun-gird-content">1</div>
    </div>
    <div class="yun-grid-col-2">
        <div class="yun-gird-content">2</div>
    </div>
    <div class="yun-grid-col-3">
        <div class="yun-gird-content">3</div>
    </div>
    <div class="yun-grid-col-4">
        <div class="yun-gird-content">4</div>
    </div>
    <div class="yun-grid-col-5">
        <div class="yun-gird-content">5</div>
    </div>
</div>
```

