import { log } from "../utils/logs";
import { apiUrl } from "../utils/paths"

export const fileUpload = async (file) => {
    console.log(apiUrl());
    const body = new FormData();
    body.append('upload_preset', 'react-journal');
    body.append('file', file);
    try {
        const resp = await fetch(apiUrl(), {
            method: "POST",
            body: body
        })

        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (e) {
        log(e);
        throw e;
    }
    //return url;
}