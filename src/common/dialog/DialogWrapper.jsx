import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import {useSelector, useDispatch} from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import languageAction from '../../stores/actions/languageAction'


export const DialogWrapper = ({oncloseDialog}) =>{
    const dispatch = useDispatch();
    const lang = useSelector(state=>state.language.language)
    const [visible, setVisible] = useState(false);
    const languages = [
      { name: 'English', code: 'EN' },
      { name: 'French', code: 'FR' },
  ];
    const [selectedLanguage, setSelectedLanguage] = useState( lang === 'French' ? languages[1] : { name: 'English', code: 'EN' });
   
    useEffect(()=>{
      setVisible(true)
    },[])

    useEffect(() => {
        dispatch(languageAction(selectedLanguage?.name))
      }, [selectedLanguage, dispatch])
    

      const footerContent = (
        <div>
            {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
            <Button className="w-full" label="OK" icon="pi pi-check" onClick={() => handleOnHide()} autoFocus />
        </div>
    );

    const handleOnHide =() =>{
      setVisible(false);
      oncloseDialog();
    }
    

    return(
        <Dialog
        header="Choose Language"
        visible={visible}
        onHide={() =>handleOnHide()}
        style={{ width: "30vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        footer={footerContent}
      >
        <p className="mt-4">
          Please proceed by selecting language
        </p>
        <Dropdown value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.value)} options={languages} optionLabel="name" 
                placeholder="Select a Language" className="mt-2 w-full" />
      </Dialog>
    );
}