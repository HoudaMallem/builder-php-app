# builder-php-app
# BBsurvey Builder for builder survey
BBsurvey is jQuery Javascript plugin help you to build customer form generator 


# Install
with npm 
[ ]
with requirejs 

or you can dowloand the plugin 
# Get start

# build simple generator 
```javascript
    $('#BBsurvey').survey({
        title : 'title' ,
        hasTopics : false,
        fields : [],
        attributes : []

    })    
```
Paramèthers 

- title :  title of sur forms 
- hasTopics : By default is false , if you want to bundel your questions in topics 
- fields : it's type of question [Select , Text , Date , Number , Multi , Boolean ]
```javascript
    $('#BBsurvey').survey({
        title : 'title' ,
        hasTopics : false,
           fields :[{
                    label : 'field with related attr' ,
                    name : 'text',
                    type: 'Text' , 
                    id: 'text' ,
                    color : 'badge-danger',
          
                  //  icon:
                  // color : 
                  attributes :[{
                        label : 'related with', 
                        name : 'related1',
                        type:{
                          name :'related',
                          optionType : 'Select'
                        // optionName : photo
                        }
                      }
          
                    ]
                  },

    })    
```

    - label : Label of field ,
    - name : name of field must be unique ,
    - type: type of champ  [Select , Text , Date , Number , Multi , Boolean ] , 
    - color : 'badge-danger',
    - icon : 'fa-list-alt',
    - attributes :[] Liste of attribute of an attribute it's un option 

        {
            label : Label of attribute ,
            name : name of attribute must be unique ',
            value: value by default of attribut it emplty by default  , 
            type: type of attribute can be string one of this liste  [Select , Text  , Number  , Boolean   ]
            or object 
       
            option: options of attribut of type Select
        }
    ]

- attributes : liste of attributes applicate in all fields 

# attribute type related 
     type:{
                name :'Related',
                optionType : 'Select'
            }

- data : put ressource on json format to 

# build  generator with topics 
If you want to bundel your question in groupes or topics you can do it with BBsurvey 
- hasTopics : true

```javascript
    $('#BBsurvey').survey({
        title : 'questionnare' ,
        hasTopics : true,

    })    
```

