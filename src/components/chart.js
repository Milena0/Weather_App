import React, { Component } from "react"
import _ from 'lodash'
import {  Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

const average = data => {
    return _.round(_.sum(data)/data.length)
};

const Chart = (props) => {
    const { data, color } = props;
    return (
        <div>
            <Sparklines height={120} width={180} data={data}>
                <SparklinesLine color={color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    )
};
export default Chart;

