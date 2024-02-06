import {React, Immutable} from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { TextInput } from 'jimu-ui'
import {IMConfig} from 'jimu-ui'
import { JimuMapViewSelector } from 'jimu-ui/advanced/setting-components'
import { MapWidgetSelector } from "jimu-ui/advanced/setting-components";


export default function (props: AllWidgetSettingProps<IMConfig>){
    const onExbPropertyChange = (evt: React.FormEvent<HTMLInputElement>) => {
        props.onSettingChange({
            id:props.id,
            config:props.config.set("exampleConfigProperty", 
            evt.currentTarget.value)
        })
    }
    const onMapSelected = (useMapWidgetIds:string[]) => {
        props.onSettingChange({
            id: props.id,
            useMapWidgetIds: useMapWidgetIds
        })
    }

    const onMapWidgetSelected = (useMapWidgetIds: string[]) => {
        props.onSettingChange({
          id: props.id,
          useMapWidgetIds: useMapWidgetIds
        });
      };

    return(
        <div>
            <MapWidgetSelector useMapWidgetIds={props.useMapWidgetIds} onSelect={onMapWidgetSelected} />
            Choose Map:
            <div className='sample-use-map-view-setting p-2'>
                <JimuMapViewSelector onSelect={onMapSelected} useMapWidgetIds={props.useMapWidgetIds}/>
            </div>
            <div className='sample-use-map-view-setting p-2'>
                exampleConfigProperty:
                <TextInput
                    value={props.config.exampleConfigProperty}
                    onChange={onExbPropertyChange}></TextInput>
            </div>
        </div>
    )
}

