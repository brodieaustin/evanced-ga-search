//collect serach form paramters
var get_params = function(){

    var selected_params, search_term, filters, filter_all, filter_inputs, all_events, all_ages, event_types, age_groups, f, i, n, temp;

    selected_params = {};

    //get search term if one is provided
    search_term = document.getElementsByName('keyword')[0].value;

    if (search_term !== ''){
        selected_params.keyword = search_term;
    }
    else{
        selected_params.keyword = '';
    }

    //define filters as a JSON object, this is just convenience
    filters = [{"type" : "events", "all" : "AllTypes", "name" : "EventType", "label" : "All events"},{"type": "ages", "all" : "AllAgeGroups", "name" : "AgeGroup", "label" : "All ages"}];

    //loop through filter inputs and build up paramters
    for (n = 0; n < filters.length; n++){
        f = filters[n];
        filter_all = document.getElementsByName(f.all);

        //if the "all" option is checked, pass that, otherwise loop through
        //inputs to see if they are checked
        if (filter_all[0].checked){
            selected_params[f.type] = f.label;
        }
        else{
            filter_inputs = document.getElementsByName(f.name);
            selected_params[f.type] = '';
            for (i = 0; i < filter_inputs.length; i++){
                if (filter_inputs[i].checked){
                    selected_params[f.type] += filter_inputs[i].value + ',';
                }
            }
            temp = selected_params[f.type];
            console.log(temp.length);
            if (temp.length > 0){
                temp = temp.substr(0, temp.length -1);
                selected_params[f.type] = temp;
            }
        }
    }

    return selected_params;
};

//gets the "find" buttons. helper function for attaching event handler
var get_buttons = function(){
    var search_panel, panel_buttons, find_buttons;

    find_buttons = [];

    search_panel = document.getElementById('sc1');
    panel_buttons = search_panel.getElementsByClassName('maintbtn');

    for (var i = 0; i < panel_buttons.length; i++){
        if (panel_buttons[i].value == 'Find'){
            find_buttons.push(panel_buttons[i]);
        }
    }

    return find_buttons;
};

//init function
var init = function(){

    var p, b;

    b = get_buttons();

    for (var i = 0; i < b.length; i++){
        b[i].addEventListener('click', function(){
            p = JSON.stringify(get_params());
            //ga('send', 'event', 'find', 'click', p);
            console.log('send', 'event', 'find events', 'click', p);
        }, false);
    }
};

//call the init function
init();
