import JQueryImport from '%libraries/jquery/import';

const TurnImport = async () => {
  await JQueryImport();
  return import('%libraries/turn/turn.min.js');
};

export default TurnImport;
