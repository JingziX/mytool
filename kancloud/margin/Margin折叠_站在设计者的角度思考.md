# Margin折叠，站在设计者的角度思考
> 原作者：melon
原文地址：http://melonh.com/css/2015/04/28/understand-margin-collapse.html

大部分前端开发者在实现布局时，都会遇到Margin折叠的问题。CSS2.1标准文档中对Margin折叠的规则进行了标准的描述，但却没有解释这样设计的原因。使得我们想要摸清楚Margin折叠规则变得异常困难，通常需要死记硬背。 博主本人非常懒，这两天终于下定决心动动瓜脑子研究透彻Margin折叠。本篇文章我试图站在设计者的角度思考Margin折叠的设计思想，帮助自己和大家一起理解Margin折叠，抛开那些死记硬背。

## 标准文档对Margin的规定
首先，我们看看标准文档对Margin的定义：

> 原文：The width of the margin on non-floating block-level elements specifies the minimum distance to the edges of surrounding boxes. Two or more adjoining vertical margins (i.e., with no border, padding or content between them) are collapsed to use the maximum of the margin values. In most cases, after collapsing the vertical margins the result is visually more pleasing and closer to what the designer expects. 

> 翻译：外边距用来指定非浮动元素与其周围盒子边缘的最小距离。两个或两个以上的相邻的垂直外边距会被折叠并使用它们之间最大的那个外边距值。多数情况下，折叠垂直外边距可以在视觉上显得更美观，也更贴近设计师的预期。

**注意：** 如文档所说，margin是非浮动元素与周围盒子边缘的**“最小”**边距哦。它定义的只是外边距的最小值。

### 为什么要有Margin折叠？

只有垂直Margin会发生折叠，而水平Margin则不会。这是为了排版的需要，因为在多数情况下，折叠垂直外边距可以在视觉上显得更美观，也更贴近设计师的预期。

### Margin折叠规则

这里列出标准文档中的Margin折叠规则。快速浏览即可:

> Two margins are adjoining if and only if: 1. both belong to in-flow block-level boxes that participate in the same block formatting context 2. no line boxes, no clearance, no padding and no border separate them (Note that certain zero-height line boxes (see 9.4.2) are ignored for this purpose.) 3. both belong to vertically-adjacent box edges, i.e. form one of the following pairs: * top margin of a box and top margin of its first in-flow child * bottom margin of box and top margin of its next in-flow following sibling * bottom margin of a last in-flow child and bottom margin of its parent if the parent has 'auto' computed height * top and bottom margins of a box that does not establish a new block formatting context and that has zero computed 'min-height', zero or 'auto' computed 'height', and no in-flow children
Note the above rules imply that: 1. Margins between a floated box and any other box do not collapse (not even between a float and its in-flow children). 2. Margins of elements that establish new block formatting contexts (such as floats and elements with 'overflow' other than 'visible') do not collapse with their in-flow children. 3. Margins of absolutely positioned boxes do not collapse (not even with their in-flow children). 4. Margins of inline-block boxes do not collapse (not even with their in-flow children). 5. The bottom margin of an in-flow block-level element always collapses with the top margin of its next in-flow block-level sibling, unless that sibling has clearance. 6. The top margin of an in-flow block element collapses with its first in-flow block-level child's top margin if the element has no top border, no top padding, and the child has no clearance. 7. The bottom margin of an in-flow block box with a 'height' of 'auto' and a 'min-height' of zero collapses with its last in-flow block-level child's bottom margin if the box has no bottom padding and no bottom border and the child's bottom margin does not collapse with a top margin that has clearance. 8. A box's own margins collapse if the 'min-height' property is zero, and it has neither top or bottom borders nor top or bottom padding, and it has a 'height' of either 0 or 'auto', and it does not contain a line box, and all of its in-flow children's margins (if any) collapse.

> 翻译： 两个Margin当且只有符合以下规则时，才会发生折叠: 1. 都属于文档流中的块级盒子，并且属于同一个BFC。 2. 无line box, clearance, padding, border分离它们 3. 都属于垂直相邻的盒子边界
以上的规则暗示了： 1. 浮动盒子不会跟其它盒子发生margin折叠（即使是于它的子元素）。 2. 创建BFC的盒子（如浮动根元素和overflow不为visible的元素）的Margin不会跟它的子元素发生margin折叠。 3. 绝对定位的盒子不会发生margin折叠（即使与它的子元素）。 4. display为inline-block的元素不会发生margin折叠（即使与它的子元素）。 5. 文档流中的会计元素的bottom margin总会和它的下一个文档流中的兄弟元素的top margin折叠，除非这个兄弟元素有clearance 6. 如果文档流中一个元素没有top border, top padding，且它的子元素没有clearance，那么它的top margin会与它的第一个文档流中的块级子元素的top margin折叠。 7. 如果文档流中的一个元素的高度为auto，min-height为0，且它没有bottom padding和bottom border，且它的子元素的bottom margin没有与拥有 8. 当一个盒子的min-height为0，没有top或bottom borders，没有top或bottom padding，height为0或auto，不包含line box，且它的所有文档流中的子孙元素的margin都折叠了，那么它自己的top margin和bottom margin会折叠。

## Margin设计思想-我的理解
1. 只有文档流中的块级元素会发生Margin折叠 文档流外的元素，我们将它们看作是希望有特殊定位的元素，不应该应用文档流中常规文档的排版规则。因此， float不为none，或者position为absolute的元素，不会与兄弟元素发生margin折叠。
 
 display为inline-block的元素参与渲染上下文是Inline block center。其垂直位置不仅依赖于Margin，还依赖于自己所属的line box。因此也不应发生margin折叠。

2. 创建BFC的元素，不会与子元素发生margin折叠

> BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

 如标准文档所说，BFC是一个独立的渲染区域，它内部的元素与这个区域外毫不相干，不会相互影响。因此，创建BFC元素ElementA，它的子元素的margin，不应该影响ElementA与其兄弟元素或父元素之间的间距。

 所以，符合以下条件触发BFC的元素，都不会与自己的子元素发生margin折叠：

- float属性不为none
- position为absolute或fixed
- display为inline-block, table-cell,
- table-caption, flex, inline-flex
- overflow不为visible

3. 当元素之间产生间隙时，可能不会发生margin折叠 元素之间可能由如下原因产生间隙：

 1. 两个元素的margin之间存在border或padding阻挡时，两个元素的margin无法折叠。
 2. 两个元素相邻，第二个元素由于设置了clear不为none，被浮动的元素挤下去，与第一个元素的margin可能折叠不完全，或者不折叠。

## 防止Margin折叠
如上所说： 
1. 只有文档流中的块级元素会发生Margin折叠 因此可通过将元素从文档流中去除，或者display设为inline-block的方式，防止其与兄弟节点发生margin折叠。 
2. 创建BFC的元素，不会与子元素发生margin折叠 因此可通过触发元素的BFC，来防止它与自己的子元素发生Margin折叠 
3. 当元素之间产生间隙时，可能不会发生margin折叠 因此可通过padding,border来制造间隙，以防止margin折叠

## 总结
这篇文章是我试图站在设计者的角度，对Margin折叠设计思想的理解。避免死记硬背这些规则。大家如果有不同的理解，欢迎讨论。