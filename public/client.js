Complete command list of Infnity Comunity bot .help
Owner: Owner is BOSNJAK U DUSI
Prefix: .
* = Not Required
^ = Bot Owner Only
^^ = Server Admin Only
"/'s" in commands show aliases for the command (Ex: ".reverse/r <text>" Command can be run with .reverse or .r)
<max_messages> = The number of messages to search through
<image> = The image URL, @discord_user, the users name, discord/custom emoji, or, nothing inputted which will search through 25 messages for embeds or attachments
<image-face> = Image requires a HUMAN FACE to be included
<image/face> = Image with or without face is acceptable (extra adjustments will be made if is face included)

-------
Join "Infinity Comunity " for any questions or help with the bot and free emotes!
https://discord.gg/TNt6Bzk
-------

Tags:
    Info: All tags are global unless someone attempts to make a tag that is global in a specific server,
          then the global tag remains untouched, but the new tag created in the server is specific for that server only.
    Scripting: .tag script
    ================================
    TAG SCRIPTING DOCS AT THE BOTTOM
    ================================
    1. View a tag           : .tag <tag_name> <tag_args>*
    2. Create a tag         : .tag create <tag_name> <tag_content>
    3. Remove a tag         : .tag remove <tag_name>
      1. Remove all tags    : .tag remove all
    4. Edit a tag           : .tag edit <tag_name> <edited_tag_content>
    5. List all your tags   : .tag list <@discord_user>*
       or a users
     1. List guild tags     : .tag glist/guildtags
    6. View tags owner      : .tag owner <tag_name>
    7. View a tag raw       : .tag view/raw <tag_name>
      1. Global tag         : .tag gview/graw <tag_name>
    8. View a tag raw       : .tag view2/raw2 <tag_name>
       in a code block
      1. Global tag         : .tag gview2/graw2 <tag_name>
    9. Upload tag content   : .tag view3/raw3 <tag_name>
       to hastebin
      1. Global tag         : .tag gview3/graw3 <tag_name>
    10. Random Tag          : .tag random
    11. Search Tags         : .tag search <tag_name>
      1. Search for a tag   : .tag search content <text>
         using tag content
    12. (^)Force remove     : .tag forceremove <tag_name>
        a tag
    13. Gift a tag/transfer : .tag gift <tag_name> <@discord_user>
        ownership
    14. View a global tag   : .tag global <tag_name>


Fun:
    Command Piping (Max 4)  : Run multiple image commands through a single command.
      Operator              : ";"
      Example               : .magik <image> ; waaw ; sharpen 10 ; explode

    1. Apply Magik to Image : .magik <image> <image(s)>*
    2. Apply Magik to GIF   : .gmagik <gif> or <image>
    3. React                : .react <message_id>* <text/emoji(s)>
    4. Bad Meme (Imgur)     : .badmeme
    5. Random 4chan post    : .chan <board>*
    6. Text Wall            : .textwall/twall <text>
    7. Aesthetics           : .aesthetics <text>
    8. ASCII                : .ascii <text>
    9. Image to ASCII       : .iascii <image>
    10. GIF to ASCII        : .gascii <gif> <liquid_rescale>*
    11. RIP Generator       : .rip <text> <text2>*
    12. Urban Dictionary    : .urban <word>
    13. Triggered GIF       : .triggered <image>
      1. Triggered Image    : .triggered2 <image>
      2. Triggered2 Image   : .triggered3 <image>
    14. Resize Image        : .resize <1-8/size> <image>
    42. Regional Emote Text : .regional <text>
    43. WebMD               : .webmd <question>*
    44. Wasted              : .wasted <image>
    45. 4Chan Green Text    : .green <text>
    46. Rainbow             : .rainbow <image>
    47. Waves               : .waves <image>
    48. Wall                : .wall <image>
    49. Rotate              : .rotate <degree> <image>
    50. Layer               : .layer <image>
    51. Multiply            : .multiply/multi <image>
    52. Multiply and Rotate : .multiply2/multi2 <image>
    53. Dice                : .dice <image>
    54. Shake               : .shake <image>
    55. Spin                : .spin <image>
    56. Scramble            : .scramble <image>
    57. Scramble 2          : .scramble2 <image>
        (No Rotation)
    58. Who Did This        : .whodidthis/wdt <image>
    59. Agar Text           : .agar <text>
    60. Agarify Text        : .agarify <text>
    -- Do ".illegal <text> are" to replace "IS" with "ARE" in the GIF.
    61. Trump Illegal GIF   : .illegal <text>
    62. Trump Legal GIF     : .legal <text>
    63. Oilpainting         : .oil <image>
    64. XD                  : .xd <text>
    65. Trace               : .trace <image>
    66. Swirl               : .swirl <image>
    67. Side To Side        : .ss/s2s <image>
    68. Up To Down          : .utd/u2d <image>
    69. Recolor             : .recolor <image>
    -- Poorly trained Neural Network Model (Nothing really NSFW).
    70. Edges2Porn (NSFW)   : .edges2porn/e2p <image>
      1. Gif                : .gedges2porn/ge2p <gif>
    71. Sharpen             : .sharpen <image>
    72. Rewind GIF          : .rewind <gif>
    73. Gay Flag Overlay    : .gay <image>
    74. Rewind GIF Loop     : .gloop <gif>
    75. Blur                : .blur <image> <scale>*
    76. Pixelate GIF        : .gpixel <gif>
    77. JPEG GIF            : .gjpeg <gif>
    78. Glitch GIF          : .gg/glitchgif <image>
    -- FaceApp Commands (for human faces).
    -- All are currently disabled for maintenance.
    -- 79. Smile               : .smile <image-face>
    -- 80. Smile 2             : .smile2 <image-face>
    -- 81. Old                 : .old <image-face>
    -- 82. Young               : .young <image-face>
    -- 83. Female              : .female <image-face>
    -- 84. Female 2            : .female2 <image-face>
    -- 85. Male                : .male <image-face>
    -- 86. Hot                 : .hot <image-face>
    -- 87. Wave                : .wave/hot2 <image-face>
    -- 88. Beard / Pan         : .beard/pan <image-face>
    -- 89. Hitman              : .hitman/hit <image-face>
    -- 90. Heisenberg          : .heisenberg/walter/ww <image-face>
    --     (Breaking Bad)
    -- 91. Glasses             : .glasses <image-face>
    -- 92. Hipster             : .hipster/hip <image-face>
    -- 93. Impression          : .impression/imp <image-face>
    -- 94. Makeup              : .makeup/mup <image-face>
    -- 95. Makeup 2            : .makeup2/mup2 <image-face>
    -- 95. Hollywood           : .hollywood/hw <image-face>
    -- 96. Mustache            : .mustache/must/stache <image-face>
    -- 97. Bangs               : .bangs <image-face>
    -- 98. Goatee              : .goatee/goat <image-face>
    -- 99. Sun Glasses         : .sunglasses/sung <image-face>
    -- 100. Tight Smile        : .tightsmile/tight <image-face>
    102. Implode            : .implode <image> <scale>*
    103. Explode            : .explode <image> <scale>*
    104. Circular/Radial    : .circle/radial <image> <angle>*
         Blur
    105. Fisheye Lens       : .fish/bulge <image>
    106. Deep Fry           : .deepfry/df <image>
    175. Gif Deep Fry       : .gdeepfry/gdf <gif>
    107. Brazzers Logo      : .brazzers/br <image>
    108. oWo                : .owo <image>
    109. Noose Guy          : .nooseguy <image>
    110. Composite Images   : .composite <images (limit 20)>
    111. Disabled           : .disabled <image>
    112. Kekistan           : .kekistan/kekflag <image>
    113. Watchmojo          : .watchmojo/mojo <image> <text>
    114. Snapchat Dog       : .snapchat/sc <image-face>
      1. Dog 2              : .snapchat dog2/d2 <image-face>
      2. Cat                : .snapchat cat/c <image-face>
      3. Cat 2              : .snapchat cat2/c2 <image-face>
      4. Devil              : .snapchat devil/d <image-face>
      5. Bunny              : .snapchat bunny/b <image-face>
      6. Heart              : .snapchat heart/h <image-face>
      7. Flowers            : .snapchat flowers/f <image-face>
      8. Flowers 2          : .snapchat flowers2/f2 <image-face>
      9. Glasses            : .snapchat glasses/g <image-face>
      10. Moustache         : .snapchat moustache/m <image-face>
      11. Angery            : .snapchat angery/a <image-face>
      12. Sunglasses        : .snapchat sunglasses/sg <image-face>
    115. iDubbbz Painting   : .paint <image>
    --Use negative speeds to make it slower.
    116. GIF Speed          : .gspeed <speed>
    117. Bob Ross           : .bobross/paint2 <image>
    118. Stepped on Shit    : .shit <image>
    119. Perfection         : .perfection <image>
    120. Worse Than Hitler  : .wth <image>
    121. For REALLY big     : .mistake <image>
         mistakes
    122. Reminder           : .reminder <image> <text>
    123. Zuckerbergs        : .zuckerberg/zuck <image>
         approval
    124. Ugly               : .ugly <image>
    125. Cool Guy           : .coolguy/cg <image>
    126. God                : .god <image>
    127. Gaben              : .gaben <image>
    128. Autism Hat         : .autism <image-face>
    129. Snapple Fact       : .fact <text>
    130. DLSR Image         : .dslr <image>
         Enchancement
    131. Ed Ed and Eddy     : .dork <image>
    132. Squidward Nose     : .art/squidward <image-face>
    133. p90.zone           : .p90 <tags>*
    134. 9GAG Watermark     : .9gag <image>
    135. Adidas             : .adidas <image>
    136. Admin Walk         : .adminwalk/adw <image>
    137. America            : .america <image>
    138. Autism Level       : .autismlevel/alevel <image>
    139. Bandicam           : .bandicam/bandi <image>
    140. Condom Fails       : .condomfail/condom <image>
    141. Depression         : .depression/depr <image>
    142. Hacker             : .hacker <text>
      1. Connor             : .hacker 2/connor <text>
    143. Gold Star          : .goldstar/star <image>
    144. Hyper Cam          : .hypercam/hcam <image>
    145. Challange          : .jackoff/challenge <image>
    146. Keemstar           : .keemstar/keem <image>
      1. Keemstar 2         : .keemstar2/keem2 <image>
    147. Rope Portal        : .portal <image>
    148. PornHub Caption    : .phcaption/phc <image> <text>
    149. Respects           : .respects <image>
    150. Russia             : .russia <image>
    151. Spain              : .spain <image>
    152. Stockphoto         : .stock <image>
         Watermark
    153. USSR               : .ussr <image>
    154. iFunny Watermark   : .ifunny <image>
    --Auto places if no face detected.
    155. Santa Hat          : .santahat/hat <image/face>
    156. Gif Sharpen        : .gsharpen <gif> <scale>*
    157. Pixel 2            : .pixel2 <image> <scale>*
    158. Face Swap          : .swap <image (>= 2 faces)>
    159. Bernie             : .bernie/congress <image>
    160. Thug Life          : .thug/thuglife <image-face>
    161. Crop/Zoom Face     : .zoom <image-face>
    162. Race Recognition   : .races/kairos <image-face>
    163. Gimp Resize Error  : .gimp <image>
    164. Transgender Flag   : .trans <image>
    165. Sonic              : .sonic <text>
    166. NotSoBot Face      : .notsobot/nsb <image-face>
    167. Zalgo              : .zalgo <text>
    168. Yusuke             : .yusuke <image>
    169. Thinking Face      : .thinking <image-face>
    170. Joy Face           : .joy <image-face>
    171. Ajit Pai           : .ajit <image>
    172. Jack               : .jack <image>
    173. Israel Flag        : .israel <image>
    174. Logan Paul         : .logan <image>
    176. Trump              : .trump <image>
    177. Blackify Face      : .blackify <image-face>
    178. Black Panther      : .panther <image>
    179. SpaceX Starman     : .spacex/starman <image>
    180. Thinking Blend     : .think <image> <scale|1-100 (opacity)>*
    181. Invert Flash       : .flash <image> <delay (ms)>
    182. GExplode           : .gexplode/gex <image> <scale|1-6>*
    183. GImplode           : .gimplode/gim <image> <scale|1-6>*
    184. Change My Mind     : .changemymind/cmm <text>
    185. WikiHow            : .wikihow <query>
    186. Supreme Logo       : .supreme <image>
    -- Create a discord message screenshot.
    -- Use flags such as "-compact" or "-light" to change the theme.
    187. Quote              : .quote <user-mention/id>* <text>
      1. Message            : .quote id <message_id>
      -- Last 100 messages
      2. User               : .quote user <@discord_user>
    188. Stephen Hawking    : .hawking/hawk <image>
    189. Rain               : .rain <image>
    190. Gold               : .gold <image>
    191. Gold 2             : .gold2 <image>
    192. Exo                : .exo <image>
    193. Kek                : .kek <image>
    194. Kek 2 - Rain       : .kek2 <image>
    195. Paper/Napkin       : .paper <image>
    196. Bubble             : .bubble <image>
    197. Tunnel             : .tunnel <image>
      1. Mode 2             : .tunnel2 <image>
    198. In Out             : .inout/io <image> <delay|20-200 (ms)>
    199. Out In             : .outin/oi <image> <delay|20-200 (ms)>
    200. Blurple            : .blurple <image>
    201. Universe Overlay   : .universe/uni <image> <overlay_type|1-4>*
    202. Einstein Chalk     : .einstein/ein <text|1-15 characters>
    203. Fat Maker          : .fat <image-face>
    204. 100 Dollar Bill    : .bill/100 <image>
    205. Anime Eyes (Black) : .anime <image-face>
      1. Blue               : .anime blue/1 <image-face>
      2. Aqua               : .anime aqua/2 <image-face>
      3. Green              : .anime green/3 <image-face>
      4. Brown              : .anime brown/4 <image-face>
      5. Red                : .anime red/5 <image-face>
      6. Purple             : .anime purple/6 <image-face>
    206. Clown Face         : .clown <image-face>
    207. Alien Face         : .alien <image-face>
    208. Soup Letters       : .soup <text|1-14 characters>
    209. Mount Rushmore     : .mount <image-face>
         Faces
    210. Galatea of the     : .spheres/galatea <image>
         Spheres
    211. Museum Frame       : .museum <image>
    212. Burning Photo      : .burn <image>
    213. Pop Art (2 x 2)    : .popart/pop <image>
    -- Removes transparent body surrounding image.
    214. Center Image       : .center <image>
    215. Face Ovleray       : .faceoverlay/overlay <image-face> <image-overlay>
    216. Hot Girl Bottle    : .grill <text>
    217. Simpsons Days      : .days/simpsons <text>
         Since
    -- Append flags " -eyes" or " -mouth" for specific facial feature.
    218. Face -Magik-       : .facemagik/fm <image-face>
      -- Alias for the effect is also the command number (e.g. ".fm 1" instead of ".fm explode").
      1. Explode            : .fm explode/exp <image-face>
      2. Implode            : .fm implode/impl <image-face>
      3. Swirl              : .fm swirl <image-face>
      4. Circular/Radial    : .fm circle/radial <image-face>
          Blur
      5. Blur               : .fm blur <image-face>
      6. Charcoal           : .fm charcoal/coal <image-face>
      7. Tehi               : .fm tehi <image-face>
      8. Pixelate           : .fm pixelate/pixel <image-face>
      9. Spin - Random Hues : .fm spin <image-face>
      10. Alternative Magik : .fm magika <image-face>
      11. Rain              : .fm rain <image-face>
      12. Gold              : .fm gold <image-face>
      13. Frost             : .fm frost <image-face>
      14. Pseudo Color      : .fm pc <image-face>
      15. Kaleidoscope      : .fm ks <image-face>
      16. Toon Filter       : .fm toon <image-face>
      17. Ripples           : .fm rip/ripples <image-face>
      18. Emoji Mosaic      : .fm emoji/e2m <image-face>
    219. Wheeze             : .wheeze <image>
    220. Pseudocolor / Hue  : .pc <image>
         Rainbow GIF
    221. Text Distort Image : .textdistort/td <image> <text>
      1. Black Background   : .textdistort2/td2 <image> <text>
    222. Wiggle GIF         : .wiggle <image>
    223. Stained Glass      : .stainedglass/sg <image>
    -- Append flags " -invert" / " -i" or " -composite" / " -c" for extra abstraction.
    224. Abstract Art       : .abstract/aa <image>
    225. Old Man            : .oldman/oldguy <image>
    226. LegalFling Consent : .consent <image> <text>*
    227. Linus              : .linus <image>
    228. Austin             : .austin <image>
    229. Source Pistol      : .pistol <image>
    230. Source Shotgun     : .shotgun <image>
    231. Fallout Excuse Me  : .excuse <image>
    232. Presidential Alert : .presidential/alert <text>
    233. Kowalski Analysis  : .analysis <image>
    234. RTX On and Off     : .rtx <image> <image>
    235. Miranda Cosgrove   : .miranda <image>
    236. Binoculars         : .binoculars/bino <image>
    -- Requires 2 text arguments (e.g. ".race test | test2")
    237. Racecard           : .racecard/race <text (split each race by '|')>
    238. Am I Disabled      : .amidisabled/disabled2 <text>
    239. Jesus              : .jesus <image>
    240. Recaptcha          : .captcha <text>
    241. Wonka Chocolate    : .wonka <text>
    242. Latte Art          : .latte <image>
    243. Emoji Mosaic       : .emojimosaic/e2m <image>
      1. Algorithm 2        : .emojimosaic2/e2m2 <image>
    244. AirPods Engraving  : .airpods <text>
    245. AirPods Pro ^^     : .airpodspro/airpods2 <text>
    246. Thinking Text      : .thonk <text>
         Font
    -- Accepts 2 text arguments using "|", not required.
    247. Neon Writing       : .neon <text (split using '|')>
    248. Text 2 Speach      : .tts <text>
      -- American English
      1. Lisa               : .tts lisa <text>
      2. Michael            : .tts michael <text>
      -- Other Countries
      3. Brazil             : .tts brazil/br <text>
      4. United Kingdom     : .tts british/uk <text>
      5. Spanish            : .tts spanish/es <text>
      6. French             : .tts french/fr <text>
      7. German             : .tts german/de <text>
      8. Italian            : .tts italian/it <text>
      9. Japanese           : .tts japanese/jr <text>
    249. Logout             : .logout <text>
    250. GIF Crystalize     : .gcrystal <image>
    -- Turn concentrations of colors into circles.
    251. Quadart            : .quadart/quad <image>
      1. Boxes instead of   : .quadart box <image>
         circles
    252. NYC Time Square    : .nyc/timesquare <image>
    253. Lego               : .lego <image> <scale|4-41>*


Google / Search:
    -- Google Search will also attempt to parse cards e.g. "weather in nyc".
    1. Google Search        : .google/g <text>
      1. Simpler Response   : .google2/g2 <text>
    2. Google Image         : .image/img <text>
      1. Simpler Response   : .image2/img2 <text>
    3. YouTube Search       : .youtube/yt <text>
    4. DuckDuckGo Search    : .duckduckgo/ddg <text>
      1. Simpler Response   : .duckduckgo2/ddg2 <text>
    5. WolframAlpha         : .wolframalpha/wa <text>
    6. Image Labels         : .labels <image>
    7. Image Safety Lables  : .slabels/isnsfw <image>
    -- Extract text from images
    8. OCR                  : .ocr <image>
    -- Target language must be two letter language code.
    -- english => en | spanish => es | german => de
    -- You can also specify the "-source <source-language>" flag
    -- as part of the text.
    9. Translation          : .translate/tr <target-language> <text>
    -- Same flags/rules apply as ^^^ translate.
    10. OCR Translate       : .ocrtranslate/ocrtr <target-language> <image>

Utility:
    1. Invite OAUTH2 Link   : .invite
    2. (^)Git Pull          : .update
    3. (^)Logout of Discord : .die
    4. (^)Changes Status    : .status <status>
    5. (^)Say Text          : .say <text>
    6. Server Info          : .server
    7. Eval Python Code     : .debug <code>
    8. (^)Loop              : .loop <amount> <commmand>
    9. Ping                 : .ping <ip/website>*
    10. Users Avatar Link   : .avatar <@discord_user>
    11. Servers Seen On     : .seenon <@discord_user>*
    12. Bots Uptime         : .uptime
    13. Users Information   : .info/user <@discord_user>
    14. Channel Information : .cinfo
    15. Upload A Gist       : .gist <text>
    16. (^)Set Bot Avatar   : .setavatar <image>
    17. (^)Set Bot Name     : .setname <text>
    18. Steam User Info     : .steam <steamid/steam64/steamurl/customurl>
    --Start the message with (NO PREFIX).
    19. Find and Replace    : sed/<text to find>/<text to replace it with>/
        Text (Sed)
    20. Statistics          : .stats
    21. Leave Feedback or   : .complain <text>
        Complaints
        1. (^)Complain      : .complain respond <complain_id/latest/|> <text>
              Respond
    22. Leave a *nice*      : .compliment <text>
        compliment!
    -- Name logs are archived 07/16/19
    -- Guild name logs still work!
    23. Name/Nickname Logs  : .names <@discord_user>*
      1. Server Name Logs   : .snames
    -- 30. Online Staff        : .admins/mods
    24. Reminder            : .remind <time> (1d1h = 1 day 1 hour) <text>*
      1. List Reminders     : .remind list
      2. Remove Reminder    : .remind remove <id>
        1. Remove All       : .remind remove all
    25. Hash MD5            : .hash <text>
      1. Hash SHA1          : .hash sha1 <text>
      2. Hash SHA256        : .hash sha256 <text>
      3. Hash SHA512        : .hash sha512 <text>
    26. Undo Command        : .undo
        Messages
    27. Screenshot a Site   : .screenshot <url>
    28. Unicode Character   : .char <text>
        Info
    ---You can also only input a discord code block with the language you want as the syntax highlighting language.
    29. Rextester Code      : .rex <language> <code>
        Execution
      1. List Languages     : .rex list
    30. Shard Info          : .shards
    31. (^)RPC              : .rpc
      1. Ping               : .rpc ping
      2. (^)Eval            : .rpc eval <code>
        1. Specific Shard   : .rpc eval shard <code>
      3. (^)Reload Mod      : .rpc reload <mod>
      4. (^)Send Message    : .rpc say <#discord_channel> <text>
      5. (^)MySQL Reload    : .rpc mysql reload <table>
      6. (^)Set RPC Timeout : .rpc timeout <float>
      7. (^)Git Pull        : .rpc update
    32. Command logging to  : .logopt
        channel opt-in/out
    --Responds with a message of your choice or simply that you're AFK whenever someone pings you.
    33. AFK                 : .afk <text>*
    34. Playing Steam       : .sp <game>


NSFW (Not Safe For Work): --Requires the channel to be marked as NSFW.
    1. E621                 : .e621 <search/tags>
    2. Rule34               : .rule34 <search/tags>
    3. Rule34 Paheal        : .paheal <search/tags>
    4. Yandera              : .yande <search/tags>
    5. Xbooru               : .xbooru <search/tags>
    6. Gelbooru             : .gelbooru <search/tags>
    7. Pornhub              : .porn/pornhub <search>
    8. Ban a tag/search     : .bantag <tags>
      1. List all banned    : .bantag list
      2. Unban tag          : .bantag remove <tags>
        1. Unban all        : .bantag remove all


Roles:
    1. Set Your Color       : .color <color>
      1. (^^)Add color      : .color add <hex/name/etc> <role_name>
      2. (^^)Remove color   : .color remove <name>
    2. Remove your color    : .uncolor
    3. Colors Available     : .colors
    5. (^^)Add default      : .addcolors
       colors
    6. (^^)Remove all       : .removecolors
       colors


Administration/Moderation (^^):
    1. Server Logs          : .slogs
      1. Ignore User/Bot    : .slogs ignore <@discord_user(s)>/<user_id(s)>
      2. Ignore User/Bot    : .slogs ignore avatar <@discord_user(s)>/<user_id(s)>
         Avatar Changes
    2. Remove Bot & Invoker : .clean <max_messages>*
       Messages
    3. Remove Messages      : .prune <max_messages>* <@discord_user(s)>*
      1. Bot Messages       : .prune bots <max_messages>*
      2. Attachments        : .prune attachments <max_messages>*
      3. Embeds             : .prune embeds <max_messages>*
      4. Images             : .prune images <max_messages>*
      5. With a string/text : .prune with <max_messages> <text>
      6. After message id   : .prune after <message_id> <#discord_channel>*
    4. Hackban (Ban user    : .hackban <id(s)>
        not on server/by id)
    5. Mute/Turn off a User : .off <@discord_user>
      1. List users "off"   : .off list
    6. Un-mute/Turn on a    : .on <@discord_user>
       User
      1. Turn on all users: : .on all
    7. Leave Server         : .leave
    8. Nickname             : .nick <nickname> <@discord_user(s)>
      1. Mass Change        : .nick mass <nickname>
         Everyones Nickname
      2. Mass Revert/Remove : .nick mass revert/reset
         Everyones Nickname
      3. Cancel Mass Event  : .nick mass cancel
    9. List Invites        : .invites
    --Role name is case sensitive
    10. Add role            : .addrole <role> <@discord_user(s)>
        to a user
    11. Remove role         : .removerole <role> <@discord_user(s)>
        from a user
    12. Channel Perm Mute   : .mute <@discord_user(s)>
        User
      1. Unmute             : .unmute <@discord_user(s)>
    13. Pin a message       : .pin <max_messages> <message_id/message_content> (ID of the Message or Text in the content of the message)
      1. After a Specific   : .pin date <MM/DD/YYYY>
         Date
      2. Before a Specific  : .pin before <MM/DD/YYYY> <max_messages> <message_content>
         Date
      3. Pin the first      : .pin first <#discord_channel>*
         Message in current/specified channel
      4. Remove Pins        : .pin removeall <@discord_user>* <#discord_channel>*
    --For commands: image, google/search (Safety is automatically disabled if NSFW channel).
    14. Set Google Safety   : .safety <low/medium/high> or <1 (off)/2 (medium)/3 (high)>
        Level
    --Send a message including the command when a user deletes the invoking message (before 20 minutes).
    15. On Command Message  : .cmd_delete
        Delete Messages
    --Server Protection
    --Ban users if they mention over the specified threshold (Bans logged to current or specified channel).
    16. Auto Mention Spam   : .mentionspam <threshold/count> <#discord_channel>*
        Tracker
      1. Disable            : .mentionspam off
      2. Change Action Log  : .mentionspam channel <#discord_channel>*
         Channel
    --Raid mode for when your server is under attack.
    --Levels: 0 - off (turn off raid mode), 1 - on (log member joins to a channel), 2 - strict (kick members who joined (the server or discord) less than 30 minutes ago).
    17. Raid Mode           : .raid <mode>
      1. Change Action Log  : .raid channel <#discord_channel>*
         Channel


Blacklisting/Command Toggling/Prefix (^^):
1. Blacklisting (Alias: ignore):
    --To unblacklist, run the command the same way as you did to blacklist.
    1. User                 : .blacklist <@discord_user>
    2. Channel              : .blacklist channel <#discord_channel>*
    --This will blacklist everyone except specific roles (user must have the role to use the bot).
    --It also acts as a toggle, to remove a role run the command again with the specified role, same with adding.
    3. All except role(s)   : .blacklist except <@discord_role(s)>
    4. List all blacklists  : .blacklist list
    5. (^)Global            : .blacklist global <@discord_user>
       Blacklist
2. Command Toggling (Alias: cmd):
    --All commands act as a toggle (run once to disable, again to enable).
    1. Server Wide          : .command <command_name>
    2. User                 : .command user <command_name> <@discord_user>
    3. Role                 : .command role <command_name> <discord_role>
    4. Channel              : .command channel <command_name> <#discord_channel>*
    5. (^)Global            : .command global <command_name>
    6. Enable all disabled  : .command all
       commands
    7. List all disabled    : .command list
       commands
    --Specific bot modules such as Fun/Image commands or NSFW Commands (run the list command to see all).
    8. Module               : .command module <module_name>
      1. List all Modules   : .command module list
3. Bot Server/Channel Prefix:
    1. Add default prefix   : .prefix <text>
      1. Change default     : .prefix channel <text (wrap in "" if more than 1 word)> <#discord_channel>*
         prefix for channel
      2. Add a prefix       : .prefix add <text>
         (non-default)
    2. Delete prefix        : .prefix delete <text>
    3. Reset server         : .prefix reset
       prefix 
      1. Reset channel      : .prefix reset channel <#discord_channel>*
         prefix
      2. Reset all channel  : .prefix reset channels
         prefixes
      3. Reset all          : .prefix reset all
         prefix settings


=============
Tag Scripting
=============

{user} - Your username
{mention} - Your username#discrim
{discrim} - Your discriminator
{id} - Your ID
{nick} - Your nickname (username by default)
{server} - This server
{servercount} - Number of users on the server
{serverid} - The servers ID
{channel} - The name of the channel the tag was used
{channelid} - The id of the channel the tag was used (try <#{channelid}> for a mention)
{args} - All the text that came after the tag name
{arg:0} - A specific-numbered argument, starting at 0 for the first argument
{argslen} - The number of arguments
{avatar} - Your avatar URL
{randuser} - A random username from the server
{randonline} - A random online username on the server
{randchannel} - A random channel on the server
{choose:A|B|C} - A random item in the list
{range:1|100} - A random number
{replace:text1|with:text2|in:text3} - Replaces text
{replaceregex:regex|with:text|in:text2} - Regex replace text
{upper:text} - UPPERCASE TEXT
{lower:text} - lowercase text
{url:text} - Converts URL to proper encoding
{math:4|+|5|%|6} - Computes values (valid oprations: |+| |-| |*| |/| |%|)
{if:{id}|=|130070621034905600|then:potato|else:idk} Valid Conditions/Comparisons: |=| (Equal) |<| (Less than) |>| (Greater than) |>=| (Greater/equal) |<=| (Less/equal) |~| (Ignore-case equal) |?| (Regex)
{set:variable|value} - Set a temporary variable to call later on in the tag
{get:variable} - Retrieves the value of a temporary variable
{note:text} - Comment, completely removed during parsing
{substring:text|start|end} - Take the substring of a text
{prefix} - Returns the first current bot prefix
{code:text} - Formats text into a code block

// Run code with tags!
{lua:print('1')} - Execute Lua Code or Functions
{lang:code} - Replace lang with any language from the "rex list" command to execute code

{n​sfw} - Mark a tag as NSFW
{eval:text} - Reevaluates text (useful with {ignore})
{ignore:text} - Ignores script tags in text
{length:text} - Number of characters in text
{attach/file:url|filename (optional)} - Attaches an image (Ex: {attach:example.org/image.png})
{text:url} - Returns the text contents of the URL
{haste:text} - Returns URL to a hastebin of the included text
{lattach} - Returns URL of the last attachment in chat


// Tag script to manipulate images using code.
{iscript:code} - Image Script v1  https://gist.github.com/matmen/d4fa000110efe2944078fb8065dafd11#file-imagescript-md
{iscript2/imagescript:code} Image Script v2 https://imagescript.dreadful.tech/


Problems/Reports: Contact @NotSoSuper#3412 or ask on the Development Server.
// listen for the form to be submitted and add a new dream when it is
dreamsForm.onsubmit = event => {
  // stop our form submission from refreshing the page
  event.preventDefault();

  const data = { dream: dreamInput.value };

  fetch("/addDream", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => res.json())
    .then(response => {
      console.log(JSON.stringify(response));
    });
  // get dream value and add it to the list
  dreams.push(dreamInput.value);
  appendNewDream(dreamInput.value);

  // reset form
  dreamInput.value = "";
  dreamInput.focus();
};

clearButton.addEventListener('click', event => {
  fetch("/clearDreams", {})
    .then(res => res.json())
    .then(response => {
      console.log("cleared dreams");
    });
  dreamsList.innerHTML = "";
});
