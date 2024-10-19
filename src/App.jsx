import React from "react";
import Part1 from './Components/Part1';
import Part3 from './Components/Part3';
import Part4 from './Components/Part4';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <Part1 />
                <Part3 />
                <Part4/>
            </>
        );
    }
}

