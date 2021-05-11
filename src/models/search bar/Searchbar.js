
import React from "react";


import "./searchbar.css";

class SearchBar extends React.Component{





    render(){


        return(


<div class="search">

<input type="checkbox" id="trigger" class="search__checkbox" />
<label class="search__label-init" for="trigger"></label>
<label class="search__label-active" for="trigger"></label>
<div class="search__border"></div>
<input type="text" class="search__input"  placeholder="Search a War" />
<div class="search__close"></div>
</div>

        );
    }
}


export default SearchBar;