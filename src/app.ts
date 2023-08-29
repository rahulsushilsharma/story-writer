import { ChromaClient, Collection } from 'chromadb';
import { OpenAIEmbeddingFunction, IEmbeddingFunction } from 'chromadb';
import fetch from 'node-fetch';
import { EmbeddingFunction } from './EmbeddingFunction.js';
const API_URL = "https://api-inference.huggingface.co/pipeline/feature-extraction/sentence-transformers/all-mpnet-base-v2"

const client = new ChromaClient();
const embedder = new EmbeddingFunction({ api_path: API_URL, api_key: "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" })
let collection :Collection

try{
   collection = await client.createCollection({ name: "test1", embeddingFunction: embedder })

}catch {
   collection = await client.getCollection({ name: "test1", embeddingFunction: embedder })

}
const text1 = `
Although Han Jue had stayed in the Jade Pure Sect for hundreds of years, he didn’t know many people. The ones he knew could even be counted with one hand.

Li Qingzi was one of them. If not for his arrangements, the Spirit Qi in the immortal mountain would not be so abundant. Of course, Li Qingzi also obtained the assurance and protection of the Jade Pure Sect from Han Jue.

Han Jue also hoped that he could walk on the path of cultivation.

Li Qingzi was very happy to receive his agreement. He asked a few more questions and then left.
$
It was a huge matter for the Jade Pure Sect to change its name to Jade Pure Sacred Sect. At that time, the entire sect would hold a banquet. The elders hoped that Han Jue could preach the Dao for the disciples, but he rejected them.

Han Jue did not want to show himself.

It was good now. Although Deity Slaying Elder was famous, the disciples did not know his appearance. When he had nothing to do, he could still wander around the inner city.

After Li Qingzi left, Han Jue thought of Chang Yue’er, who had left with Daoist Nine Cauldrons.

After this senior sister who had always liked him went overseas, she spent most of her time cultivating and rarely participated in the sect’s conflicts.
$
The Heavenly Puppet that Han Jue had given her had not been used. Even if she was in danger, she relied on herself to survive.

With the Heavenly Puppet paying attention to her, Han Jue would occasionally understand her situation.

Han Jue used it to send a voice transmission to Chang Yue’er, asking her to return with Daoist Nine Cauldrons.

Chang Yue’er heard his voice and was extremely excited.
$
At this moment, she was hugging the Heavenly Puppet in her cave abode like it was a doll.

“Junior, how’s the situation in the Jade Pure Sect? How’s your cultivation? So you can talk to me through the puppet. In the first few years, I called you, but you didn’t answer?” Chang Yue’er asked with a smile.

The Heavenly Puppet replied, “I can’t protect you after I use up my spirit energy. That’s all.”

“Wait!”

No matter how Chang Yue’er called, Han Jue didn’t respond.

Chang Yue’er curled her lips and snorted. “Stupid Junior Brother, you’re so concerned about me, and yet you’re not willing to admit it. It’s good that you’re so cold. I guess Xing Hongxuan and Mo Zhu often get rejected, too.

“Wait for me to return, Junior Brother. Don’t even think about escaping from me. Hehe!”
$
Thinking of this, Chang Yue’er smiled even more brightly.

After a while, a deep voice came from outside.

“Junior Sister, there’s a great expert from the Scarlet Dragon Immortal Island giving a lecture recently. I have an invitation to enter the island. Do you want to go? I can bring you there.”

Chang Yue’er’s smile vanished when she heard that. She coldly said, “Thank you for your kind intentions, Senior Brother. I won’t be going. I’ve gained some insights from my cultivation recently. I have to study them well.”

Her tone was completely different from before.

“Alright, I’ll visit you next time. If I find any good treasures on the Scarlet Dragon Immortal Island, I’ll bring them to you.”
$
“There’s no need for the trouble, Senior Brother.”

“Don’t say that. Hahaha, I’ll be leaving first. You can continue cultivating.”

Chang Yue’er cursed him for not knowing what was good for him. He didn’t cultivate properly and kept pestering her.

The next time you come back, I’ll already be back by my handsome Junior Brother’s side!

…

In a dark cave, five figures sat together. One of them was Xuan Qingjun.

A black-robed elder said, “Great Sage Green Python is dead. He died in a sect called the Jade Pure Sect in the Great Yan. What do you think about this?”
$
Xuan Qingjun’s expression did not change. She did not seem to recognize the Jade Pure Sect.

“Great Sage Green Python is my master’s beast pet. Letting him slaughter the humans of the ten prefectures and nine dynasties is also part of our plan. We must take revenge for this. Although the humans of the other ten prefectures and nine dynasties are either dead or injured, the human race has yet to completely disintegrate. We have to find another way,” a black figure said in a low voice. It was impossible to tell if he was a human or a ghost.

A burly monk beside him sneered. His bald head was covered in scars that looked like they were crawling with centipedes. He looked terrifying.

He snorted. “Great Sage Green Python was too arrogant. By relying on Daoist Jueyan’s Dharma treasure, he really thought that he was invincible. It’s good that he’s dead. It’s still not enough to rely on the demons alone. If we want to defeat the human cultivation world, we still have to rely on the humans themselves. I propose to support the human fiendish cultivators and facilitate the infighting among the humans.”

A white-haired woman nodded. She wore red clothes and had pale skin. She looked more like a female ghost. She revealed a cold smile and said, “Agreed.”

The black-robed elder looked at Xuan Qingjun and asked, “Demon Lord, what do you think?”

Xuan Qingjun nodded. “I have no objections. I’ve been to the netherworld before. The devil race is getting impatient.”
$
Upon hearing this, the black-robed elder, the white-haired woman, the black shadow, and the scarred monk frowned.

“Leave the Jade Pure Sect to me. I’ll leave the rest to you,” Xuan Qingjun continued.

The black-robed elder replied, “Yes, we have to figure out the background of that mysterious cultivator from the Jade Pure Sect. If it’s not beneficial to our plan, Demon Lord, I hope you will try your best to kill him.”

Xuan Qingjun nodded, expressionless.

…

Cultivation paid no regard to time. Ten years in the mortal world was sufficient for a whole new generation.

Another five years passed, and the slaughter caused by Great Sage Green Python finally came to an end.
$
The Jade Pure Sect was renamed the Jade Pure Sacred Sect and became the publicly recognized cultivation holy land of the Great Yan Cultivation World. More and more cultivators joined the sect, and many of them came from other states.

After changing the name, the Jade Pure Sect became stronger.

Han Jue finally broke through to the ninth level of the Body Integration Realm!

He was excited because the Tribulation Transcendence Realm was right in front of him.

To celebrate, he took out the Book of Misfortune and habitually cursed.

Vermilion Bird, Mo Youling, Daoist Jueyan, none of them were spared!

While cursing, he checked his emails.
$
[Your pet, the Chaotic Heavenly Dog, was attacked by demons] x28211

[Your good friend Zhou Fan was attacked by a fiendish cultivator] x3779

[Your friend Mo Fuchou was attacked by a fiendish cultivator] x3644

[Your good friend Zhou Fan was seriously injured. His life is hanging by a thread.]

[Due to your curse, your enemy Mo Youling’s Dao heart has been damaged. She has encountered inner demons and her cultivation has greatly decreased.]

[Your disciple Su Qi was attacked by a Demon King and was severely injured.]

[Your disciple Su Qi spread bad luck and the Demon King was killed by a cultivator passing by.]
$
[Your Dao Companion Xing Hongxuan obtained an opportunity and entered the Grotto-Heaven Blessed Land.]

…

Han Jue was amused.

Mo Youling’s cultivation had fallen greatly. How wonderful!

Unfortunately, nothing had happened to Vermilion Bird and Daoist Jueyan yet.

Han Jue noticed Xing Hongxuan’s situation. More than ten years ago, Han Jue had set Xing Hongxuan as his Dao Companion. Her favorability had already reached six stars and she had been physically intimate with him. She could be set as his Dao Companion directly.

As for Mo Zhu, Han Jue had yet to set her as his Dao Companion.

Xing Hongxuan often offered him treasures, and Mo Zhu would occasionally cause trouble for him. In Han Jue’s heart, Xing Hongxuan was naturally more important.

“This woman must have been influenced by my Immortal Emperor descendant’s providence. Her luck is really good,” Han Jue thought silently.

At the same time, he started to look forward to what treasures Xing Hongxuan would bring him.

Tsk!
$
That seemed an improper thought.

…

Half a month later, Han Jue put down the Book of Misfortune and habitually tested the strongest person in the Jade Pure Sect other than him.

[Xuan Qingjun: Eighth level of the Mahayana Realm, known as the Demon Lord]

Han Jue was stunned.

Why was she back?

This was not her mortal body!

The eighth level of the Mahayana Realm was so blinding to see!

Han Jue became nervous. He immediately used his divine sense to search for her.

The demoness was resting in the inner city inn.

Han Jue thought for a moment and decided to go.
$
He couldn’t avoid it!

However, he stopped when he reached the entrance.

He decided to try the simulation trial first and see if he could defeat Xuan Qingjun.`

const ids = []
let i = 0
for(i= 0;
    i<text1.split('$').length;
    i++
    )
{
        ids.push('ID'+i)

}

await collection.add({
    ids:ids,
    documents: text1.split('$')
})

const results = await collection.query({
    nResults: 2,
    queryTexts: ["trouble with Mo Zhu"]
})
console.log(results);
