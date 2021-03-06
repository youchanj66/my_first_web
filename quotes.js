const list = [
    "지방간, 혈중지방에 겨울 굴이 아주 좋다.\n\
    간기능이 파괴되어 GOT, GPT가\n\
    높으면 매우 위험한데, 겨울의 바닷굴은\n\
    아주 좋은 치료식이다.\n\
    그 원리는 조혈(造血)과 정혈(精血)인데,\n\
    굴은 양쪽 다 강하게 작용하며 특히 철분, 망간,\n\
    미네랄군, 아미노산, 글리코겐, 타우린 등이\n\
    많이 들어 있어 에너지의 寶庫로 잘 알려져 있다.",

    "구기자로 몸이 건강해진다. 구기자는 \n\
    예로부터 자양강장의 묘약으로 알려져 왔으며,\n\
    매일 복용하면 병약자가 건강해지고,\n\
    정력이 증진되며, 시력이 좋아지고,\n\
    위장의 활동이 좋아진다.\n\
    야산에 흔히 자생하는 구기자를 보면 지나치지 말고\n\
    어린잎과 열매를 채취하여 그늘에 말렸다가\n\
    차로 오래 복용하면 확실한 효과를 볼 수 있다.",

    "배탈설사는 오이를 많이 먹어라\n\
    배탈이 나서 설사할 때는 얇게 썬\n\
    오이를 흑설탕에 재어 양껏 먹으면 좋다.",

    "나빠진 위는 콩나물이 좋다\n\
    콩은 인체에 없어서는 안될 식품이고 영양가도\n\
    높지만 소화가 잘 안된다.\n\
    이럴 때 콩나물을 먹은 것이 대단히 좋다.\n\
    콩나물에는 비타민C가 많고 요즈음에는 항암물질인\n\
    셀렌이라는 물질이 발견되어 붐이 일기도 했다.\n\
    먹는 방법은 재료 500g에 물은 반컵정도로 하여\n\
    약간의 소금을 넣고 뚜껑을 닫은 채 강한 불로 3분간\n\
    데쳐 식힌 후에 적당한 양념을 하여 먹으면 되는데,\n\
    날씬해 지는 미용식으로는 최고의 식품이며,\n\
    아무리 먹어도 뚱뚱해지지 않고,\n\
    변비는 1주일만에 해소되며, 피부도 한결 좋아진다.",

    "뱃살을 확실히 빼려면 한가지만으로는 절대 안되며,\n\
    지방을 태우는 유산소운동과 식사\n\
    감량을 병행해야 하는데,\n\
    가장 권장할 만한 운동이 걷기와 수영이며,\n\
    세끼의 식사를 하되 저녁은 7시 이전에 먹도록 한다.",

    "감을 먹으면 탄닌이라는 성분이 들어 있어 위를\n\
    보호하는 기능을 하므로 술이 빨리 깬다.\n\
    우유를 따뜻하게 데워 먹어도 좋다.\n\
    머리가 아플땐 커피 한잔과 갈근차(칡차)를 마셔도\n\
    술 해독에 큰 도움이 된다.\n\
    또한 미지근한 물에 정종 1컵을 섞어 만든\n\
    청주목욕이 음주피로를 빨리 풀어준다.\n\
    얼큰한 해장국은 약해진 위벽을 더 자극하는 것이므로\n\
    좋지 않고 담백하고 개운한 콩나물국,\n\
    조개국, 미역국, 시금치국이 숙취해소에 효과가 크다.",

    "술을 마시면 몸과 뼈에서 칼슘이 빠져나가는데,\n\
    이럴 땐 다음날에 반드시 이온음료(포카리스웨트, 게토레이)를\n\
    마심으로 해서 보충해줄 수 있다.\n\
    이온음료는 말 그대로 이온이기 때문에\n\
    흡수가 잘되고 효과도 빠르게 나타나는데,\n\
    그러나 신장에 이상이 있는 사람(담석증)은 삼가야 한다.",

    "코피가 계속 날 때는 안한 자세로 앉아 머리를\n\
    약간 젖히고 엄지와 검지로 코를 잡고 한동안\n\
    지그시 안쪽으로 눌러주면 멎는데\n\
    차가운 물수건이나 얼음수건으로\n\
    코와 이마를 덮어주면서 하면 효과가 크다.",

    "물에다가 발을 담근 뒤 햇볕에 말리면\n\
    그것이 자외선 소독이 되어 자연적으로\n\
    치유가 되는 데,\n\
    의외로 효과가 크며 가장 근본적인 치료법이다.",

    "소주 1병에 식초 한컵, 그리고 우황청심원 1개와\n\
    솔잎가루 한컵을 잘 섞은 후에 발을 30분 동안 담그는데\n\
    1주일에 한번씩 한달만 해보세요.\n\
    예전부터 내려오는 민간요법으로\n\
    발이 시원해지면서 무좀균이 아주 잘 죽습니다.",

    "현대인들은 업무로 인한 스트레스나\n\
    심한 음주습관 등으로 위염이나\n\
    위궤양을 앓고 있는 사람이 많은 데,\n\
    이 때에는 양배추 특히 푸른부분을 날로\n\
    썰어 먹거나 주스로 만들어 보름정도 먹으면 효과가 좋다.",

    "피부에 가시가 깊이 박혀 쪽집게나 바늘로는\n\
    좀처럼 빠지지 않을 경우 고약을 발라주면\n\
    고약이 가시를 빨아낼 뿐 아니라\n\
    열과 통증도 없애준다.\n\
    또한 부추를 짓이겨 3～4회 발라주어도\n\
    신기하게 가시가 솟아오른다.",

    "몸이 오싹거리며 열과 두통을 동반한\n\
    감기에는 배추뿌리를 깨끗이 씻어\n\
    생강과 흑설탕을 넣고 끓여 마시면 효과가 좋다.",

    "살속으로 파고 들어가는 억센 발톱을\n\
    아프지 않게 깎으려면 탈지면에 식초를\n\
    흠뻑 적셔 발톱위에 10분정도 올려 놓는다.\n\
    이렇게 하면 발톱이 물러지면서\n\
    통증이 멎는데, 이때 손톱깍기로\n\
    깎아주면 아프지 않고 쉽게 깍인다.",

    "갑자기 나른하고 어지러울 때는 피가 부족해\n\
    발생하는 빈혈증세로 보아야 하는데,\n\
    이럴 때는 기름기 적은 생선, 두부, 콩, 유부, 멸치,\n\
    간, 계란, 탈지유 등 철분생성을 돕은 식품을 많이 먹으면 좋다.",

]

const quote = document.querySelector(".quotes")
const todays_list = list[Math.floor(Math.random()*list.length)]
quote.innerText = todays_list