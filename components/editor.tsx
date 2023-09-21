//./components/Editor
import React, { memo, useEffect, useRef } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { EDITOR_TOOLS } from '@/utils/EditorTools'

//props
type Props = {
    data?: OutputData;
    onChange(val: OutputData): void;
    holder: string;
    className?: string;
};

const EditorBlock = ({ data, onChange, holder, className }: Props) => {
    //add a reference to editor
    const ref = useRef<EditorJS>();

    //initialize editorjs
    useEffect(() => {
        //initialize editor if we don't have a reference
        if (!ref.current) {
            const editor = new EditorJS({
                holder: holder,
                tools: EDITOR_TOOLS,
                data,
                async onChange(api, event) {
                    const data = await api.saver.save();
                    onChange(data);
                },
            });
            ref.current = editor;
        }

        //add a return function handle cleanup
        return () => {
            if (ref.current && ref.current.destroy) {
                ref.current.destroy();
            }
        };
    }, []);


    return <div id={holder} className={className} />;
};

export default memo(EditorBlock);
