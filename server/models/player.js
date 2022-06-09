class Player {
  constructor(id, action, board, isFirst) {
    this.id = id;
    this.action = action;
    this.nodesLeftToPlace = 9;
    this.error = '';
    this.board = board;
    this.isFirst = isFirst;
    this.selectedNode = null;
    this.moves = 0;
    this.mills = 0;
  }

  changeAction(newAction) {
    if (newAction === 'capture') {
      this.mills++;
    }
    this.action = newAction;
  }

  capturedNodes = () => this.isFirst ? 9 - this.board.secondTokens : 9 - this.board.firstTokens;

  toJson() {
    const json = {};
    json[this.id] = {
      action: this.action,
      nodesToPlace: this.nodesLeftToPlace,
      error: this.error,
      capturedNodes: this.capturedNodes(),
      isFirst: this.isFirst,
      moves: this.moves,
      mills: this.mills
    };

    return json;
  }

  is = id => this.id === id;

  placedNode() {
    this.nodesLeftToPlace--;
    this.moves++;
  }

  setError(newError) {
    this.error = newError;
  }
}

export default Player;