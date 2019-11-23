---
layout: post
title:  "All The Ways You Can Compress BERT"
categories: "machine learning"
---

Model compression reduces redundancy in a trained neural network. This is
useful, since BERT barely fits on a GPU (BERT-Large does not) and definitely
won't fit on your smart phone. Improved memory and inference speed efficiency
can also save costs at scale.

In this post I'll list and briefly taxonomize all the papers I've seen
compressing BERT. Don't see yours? Feel free to shoot me an
[email](mailto:mitchell.gordon95@gmail.com).

## Methods

__Pruning__ - Removes unnecessary parts of the network after training. This
includes weight magnitude pruning, attention head pruning, layers, and others.
Some methods also impose regularization during training to increase prunability
(layer dropout).

__Weight Factorization__ - Approximates parameter matrices by factorizing them
into a multiplication of two smaller matrices. This imposes a low-rank
constraint on the matrix. Weight factorization can be applied to both token
embeddings (which saves a lot of memory on disk) or parameters in feed-forward /
self-attention layers (for some speed improvements).

__Knowledge Distillation__ - Aka "Student Teacher." Trains a much smaller
Transformer from scratch on the pre-training / downstream-data. Normally this
would fail, but utilizing soft labels from a fully-sized model improves
optimization for unknown reasons. Some methods also distill BERT into different
architectures (LSTMS, etc.) which have faster inference times. Others dig deeper
into the teacher, looking not just at the output but at weight matrices and
hidden activations.

__Weight Sharing__ - Some weights in the model share the same value as other
parameters in the model. For example, ALBERT uses the same weight matrices for
every single layer of self-attention in BERT.

__Quantization__ - Truncates floating point numbers to only use a few bits
(which causes round-off error). The quantization values can also be learned
either during or after training.

__Pre-train vs. Downstream__ - Some methods only compress BERT w.r.t. certain
downstream tasks. Others compress BERT in a way that is task-agnostic.

## Papers

<a href="{{'/assets/bert_compression.bib' | absolute_url}}">Bibtex</a>

<style>
table {
font-size: 10px;
}
</style>

<table>


<tr>
  <th style="width: 300px"> Paper                                                                                                                               </th>
  <th> Prune </th> <th> Factor </th> <th> Distill </th> <th> W. Sharing </th> <th> Quant. </th> <th> Pre-train </th> <th> Downstream </th>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SJlPOCEKvH">Compressing BERT: Studying the Effects of Weight Pruning on Transfer Learning</a>         </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1905.10650">Are Sixteen Heads Really Better than One?</a>                                                        </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.06360">Pruning a BERT-based Question Answering Model</a>                                                    </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SylO2yStDr">Reducing Transformer Depth on Demand with Structured Dropout</a>                          </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=r1gBOxSFwr&noteId=r1gBOxSFwr">Reweighted Proximal Pruning for Large-Scale Language Representation</a> </td>
  <td> &#x2611; </td> <td>               </td> <td>                        </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.04732">Structured Pruning of Large Language Models</a>                                                      </td>
  <td>          </td> <td> &#x2611;      </td> <td>                        </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=H1eA7AEtvS">ALBERT: A Lite BERT for Self-supervised Learning of Language Representations</a>          </td>
  <td>          </td> <td> &#x2611;      </td> <td>                        </td> <td> &#x2611;       </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=S1x6ueSKPr">Extreme Language Model Compression with Optimal Subwords and Shared Projections</a>       </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.01108">DistilBERT, a distilled version of BERT: smaller, faster, cheaper and lighter</a>                    </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="https://arxiv.org/abs/1903.12136">Distilling Task-Specific Knowledge from BERT into Simple Neural Networks</a>                 </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.01769">Distilling Transformers into Simple Neural Networks with Unlabeled Transfer Data</a>                 </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1908.09355">Patient Knowledge Distillation for BERT Model Compression</a>                                        </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=rJx0Q6EFPB">TinyBERT: Distilling BERT for Natural Language Understanding</a>                          </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="https://openreview.net/forum?id=SJxjVaNKwB">MobileBERT: Task-Agnostic Compression of BERT by Progressive Knowledge Transfer</a>       </td>
  <td>          </td> <td>               </td> <td> &#x2611;               </td> <td>                </td> <td>              </td> <td> &#x2611;  </td> <td>            </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1910.06188">Q8BERT: Quantized 8Bit BERT</a>                                                                      </td>
  <td>          </td> <td>               </td> <td>                        </td> <td>                </td> <td> &#x2611;     </td> <td>           </td> <td> &#x2611;   </td>
</tr>
<tr>
  <td> <a href="http://arxiv.org/abs/1909.05840">Q-BERT: Hessian Based Ultra Low Precision Quantization of BERT</a>                                   </td>
  <td>          </td> <td>               </td> <td>                        </td> <td>                </td> <td> &#x2611;     </td> <td>           </td> <td> &#x2611;   </td>
</tr>
</table>



# Bonus Papers / Blog Posts

[Sparse Transformer: Concentrated Attention Through Explicit Selection](https://openreview.net/forum?id=Hye87grYDH)

[Lightweight and Efficient Neural Natural Language Processing with Quaternion
Networks](http://arxiv.org/abs/1906.04393)

[Adaptively Sparse Transformers](https://www.semanticscholar.org/paper/f6390beca54411b06f3bde424fb983a451789733)

[Compressing BERT for Faster Prediction](https://blog.rasa.com/compressing-bert-for-faster-prediction-2/amp/)

Update 11/19/19: Bibtex and bonus papers
