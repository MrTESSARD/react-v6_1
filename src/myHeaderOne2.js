import React from "react";
const MyHead = () => {
    return (
    <div>
        {/* <h1 className={styles.green}>Commentaire</h1> ////styles ne s'aplique aux elements enfants contrairement au css normal  */}

        <h1 >Commentaire</h1>
    <p className="red">Je suis rouge ou bleu</p>
    </div>)

}

export default MyHead;