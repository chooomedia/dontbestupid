/**
 * Base class for a so post (questions, answers and comments are SoPosts)
 */
class SoEntry {
    constructor() {
        /**
         * JEder Beitrag hat einen Autor.
         */
        this.author = null;
        /**
         * JEder Eintrag auf SO kann einen voteCount haben, deshalb gehört diese Eigenschaft
         * in die Basisklasse
         */
        this.voteCount = null;
        /**
         * Jeder Eintrag hat innerHTML, deshalb -> Basis
         */
        this.innerHtml = null;
    }
}

class SoTag {
    constructor() {
        this.text = null;
    }
}
class SoComment extends SoEntry {
    /**
     * Kommentare sind einfache SOEntries und haben keine weiteren besonderen Eigenschaften
     */
    constructor() {
        super();
    }
}

/**
 * Ein Post ist ein So-Eintrag, der Kommentiert werden kann.
 */
class SoPost extends SoEntry {
    constructor() {
        super();
        /**
         * Nur Posts können kommentiert werden (kommentare können nicht kommentiert werden)
         */
        this.comments = null;
    }
}

class SoQuestion extends SoPost {
    constructor() {
        super();
        /**
         * Nur Fragen können vertaggt sein.
         */
        this.tags = null;

        /**
         * Fragen haben einen Titel, kein anderes Element sonst.
         */
        this.title = null;
    }
}

class SoAnswer extends SoPost {
    constructor() {
        super();
        /**
         * Es kann immer nur eine Antwort die Accepted-Answer sein.
         */
        this.isAccepted = null;
    }
}