import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import {useDispatch} from 'react-redux';
import { Dropdown } from 'primereact/dropdown';
import languageAction from '../../stores/actions/languageAction'


export const DialogWrapper = () =>{
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState( { name: 'English', code: 'EN' });
    const languages = [
        { name: 'English', code: 'EN' },
        { name: 'French', code: 'FR' },
    ];
    useEffect(()=>{
      setVisible(true)
    },[])

    useEffect(() => {
        dispatch(languageAction(selectedLanguage?.name))
      }, [selectedLanguage, dispatch])

      const footerContent = (
        <div>
            {/* <Button label="No" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" /> */}
            <Button className="w-full" label="OK" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    

    return(
        <Dialog
        header="Choose Language"
        visible={visible}
        onHide={() => setVisible(false)}
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