import JQueryImport from '%libraries/jquery/import';

export default async function TurnImport() {
  await JQueryImport();
  return import('%libraries/turn/turn.min.js');
}
