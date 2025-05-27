declare namespace Preset {
  interface PostPresetBody {
    presetName: string;
    indicatorName: string;
    presetData: string;
    position: string;
    profitCutRate: number;
    lossCutRate: number;
  }
  interface PresetT extends PostPresetBody {
    id: number;
  }
  interface IndicatorT {
    id: number;
    indicatorName: string;
  }
  interface DefaultPresetT extends PostPresetBody {
    exchangeId: number;
    isDefault?: boolean;
  }
}
