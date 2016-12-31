/**
 * Created by Yuicon on 2016/12/31.
 */
import React from 'react';

class ImgFigureComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    /*
     *imgsFigue的点击处理函数
     */
    handleClick(e) {
        //翻转和居中图片
        if (this.props.arrange.isCenter) {
            this.props.inverse()
        } else {
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }

    render() {
        var styleObj = {};
        //如果props属性中指定了这张图片的位置,则使用
        if (this.props.arrange.pos) {
            styleObj = this.props.arrange.pos;
        }

        //如果图片的旋转角度有值并且不为0，添加旋转角度
        if (this.props.arrange.rotate) {
            (['Moz', 'Ms', 'Webkit', '']).forEach((value) => {
                styleObj[value + 'Transform'] = 'rotate(' + this.props.arrange.rotate + 'deg)';
            })
        }
        if (this.props.arrange.isCenter) {
            styleObj.zIndex = 11;
        }

        let imgFigureClassName = 'img-figure';
        imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse ' : '';

        return (
            <figure className={ imgFigureClassName } style={ styleObj } onClick={this.handleClick}>
                <img src={this.props.data.imageURL} alt={this.props.data.title}/>
                <figcaption>
                    <h2 className="img-title">{this.props.data.title}</h2>
                    <div className="img-back" onClick={this.handleClick}>
                        <p>
                            {this.props.data.desc}
                        </p>
                    </div>
                </figcaption>
            </figure>
        );
    }
}

ImgFigureComponent.defaultProps = {};

export default ImgFigureComponent;